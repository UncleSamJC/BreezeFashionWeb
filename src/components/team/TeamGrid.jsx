import TeamMemberCard from './TeamMemberCard';
import { colors } from '../../lib/designTokens';

function TeamGrid() {
  const teamMembers = [
    {
      name: 'Emily Carter',
      role: 'Operations Director',
      description: 'With an exceptional eye for detail and a passion for excellence, Emily leads our manufacturing operations with proven expertise.',
      image: null
    },
    {
      name: 'James Wilson',
      role: 'Production Manager',
      description: 'Specializing in production planning and quality control, James brings over 20 years of experience to complex manufacturing challenges.',
      image: null
    },
    {
      name: 'Sophia Anderson',
      role: 'Quality Director',
      description: 'A strategic thinker with extensive experience in quality assurance and compliance, Sophia ensures seamless production excellence.',
      image: null
    },
    {
      name: 'Daniel Martinez',
      role: 'Business Advisor',
      description: 'Daniel provides expert counsel on production optimization and supply chain management across various product lines.',
      image: null
    },
    {
      name: 'Olivia Brown',
      role: 'Design Coordinator',
      description: 'Focusing on design collaboration and pattern development, Olivia works closely with clients to bring their visions to reality.',
      image: null
    },
    {
      name: 'William Davis',
      role: 'Supply Chain Manager',
      description: 'With a background in international logistics, William navigates cross-border sourcing and shipping complexities with ease and precision.',
      image: null
    },
    {
      name: 'Ava Johnson',
      role: 'Client Relations',
      description: 'Ava specializes in client communication and project management, providing dedicated support throughout the entire production process.',
      image: null
    },
    {
      name: 'Robert Smith',
      role: 'Technical Director',
      description: 'A seasoned technical expert with a track record of successful outcomes in high-volume production challenges.',
      image: null
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamGrid;
