// Follow this setup guide to integrate the Deno runtime with your project:
// https://deno.land/manual/getting_started/setup_your_environment

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactMessage {
  firstName: string
  lastName: string
  email: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parse request body
    const { firstName, lastName, email, message }: ContactMessage = await req.json()

    // Validate input
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Email 1: Send confirmation to user
    const userEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [email],
        subject: `Thank you for contacting us, ${firstName}!`,
        html: `
          <h2>Thank you for your message!</h2>
          <p>Hi ${firstName} ${lastName},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>

          <h3>Your message:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>

          <hr>
          <p><small>This is an automated confirmation email.</small></p>
        `,
      }),
    })

    const userEmailData = await userEmailRes.json()

    if (!userEmailRes.ok) {
      console.error('User email error:', userEmailData)
    }

    // Email 2: Send notification to admin
    const adminEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['dezhiwang5633@gmail.com'],
        reply_to: email,
        subject: `📩 New Contact Message from ${firstName} ${lastName}`,
        html: `
          <h2>📩 New Contact Form Submission</h2>

          <h3>Contact Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          </ul>

          <h3>Message:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <hr>
          <p><small>💡 Click "Reply" to respond directly to ${email}</small></p>
        `,
      }),
    })

    const adminEmailData = await adminEmailRes.json()

    if (!adminEmailRes.ok) {
      console.error('Admin email error:', adminEmailData)
      return new Response(
        JSON.stringify({ error: 'Failed to send admin notification', details: adminEmailData }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        userEmailId: userEmailData.id,
        adminEmailId: adminEmailData.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
    --header 'Content-Type: application/json' \
    --data '{"firstName":"John","lastName":"Doe","email":"john@example.com","message":"Hello!"}'

*/
