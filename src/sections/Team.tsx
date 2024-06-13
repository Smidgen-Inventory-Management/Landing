import '../css/team.css';
import jose from '../assets/profiles/jose-hernandez.jpg';
import evelyn from '../assets/profiles/evelyn-cao.jpg';
import giuliana from '../assets/profiles/giuliana-russi.jpg';
import { TeamMember } from '../components/TeamMember';

const Team = () => {
  return (
    <div className="team-container" id="home">
      <h2 className="team-header">Meet The Team</h2>
      <ul className="team-list">
        <TeamMember
          name="Jose Hernandez"
          portrait={jose}
          title="Founder, Developer"
        />
        <TeamMember name="Evelyn Cao" portrait={evelyn} title="Designer" />
        <TeamMember
          name="Giuliana Russi"
          portrait={giuliana}
          title="Developer, Cybersecurity Analyst"
        />
      </ul>
    </div>
  );
};

export { Team };
