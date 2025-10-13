import TeamMemberCard from './TeamMemberCard';
import { colors } from '../../lib/designTokens';

function TeamGrid() {
  const teamMembers = [
    {
      name: 'Emily Carter',
      role: 'Senior Partner',
      description: 'With an exceptional eye for detail and a passion for justice, Emily leads our corporate law division with proven expertise.',
      image: null
    },
    {
      name: 'James Wilson',
      role: 'Senior Partner',
      description: 'Specializing in intellectual property and litigation, James brings over 20 years of experience to complex legal challenges.',
      image: null
    },
    {
      name: 'Sophia Anderson',
      role: 'Senior Partner',
      description: 'A strategic thinker with extensive experience in mergers and acquisitions, Sophia ensures seamless business transitions.',
      image: null
    },
    {
      name: 'Daniel Martinez',
      role: 'Legal Advisor',
      description: 'Daniel provides expert counsel on regulatory compliance and risk management across various industries.',
      image: null
    },
    {
      name: 'Olivia Brown',
      role: 'Senior Partner',
      description: 'Focusing on employment law and dispute resolution, Olivia advocates fiercely for client rights and interests.',
      image: null
    },
    {
      name: 'William Davis',
      role: 'Senior Partner',
      description: 'With a background in international law, William navigates cross-border legal complexities with ease and precision.',
      image: null
    },
    {
      name: 'Ava Johnson',
      role: 'Senior Partner',
      description: 'Ava specializes in estate planning and family law, providing compassionate guidance during critical life transitions.',
      image: null
    },
    {
      name: 'Robert Smith',
      role: 'Senior Partner',
      description: 'A seasoned litigator with a track record of successful outcomes in high-stakes commercial disputes.',
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
