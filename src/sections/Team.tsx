import '../css/team.css';
import jose from '../assets/profiles/jose-hernandez.jpg';
import evelyn from '../assets/profiles/evelyn-cao.jpg';
import giuliana from '../assets/profiles/giuliana-russi.jpg';
import laura from '../assets/profiles/laura-castro.jpg';
import { TeamMember } from '../components/TeamMember';

const Team = () => {
  return (
    <div className="team-container" id="home">
      <h1 className="team-header">Meet The Team</h1>
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
        <TeamMember name="Laura Castro" portrait={laura} title="Developer" />
      </ul>
    </div>
  );
};

export { Team };
