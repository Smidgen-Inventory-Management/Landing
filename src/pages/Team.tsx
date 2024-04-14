import '../css/team.css';
import placeholder from '../assets/placeholder.png';
import { TeamMember } from '../components/TeamMember';
const Team = () => {
  return (
    <div className="team-container" id="home">
      <h1 className="team-header">Meet The Team</h1>
      <ul className="team-list">
        <TeamMember
          name="Jose Hernandez"
          portrait={placeholder}
          title="Founder, Developer"
        />
        <TeamMember name="Evelyn Cao" portrait={placeholder} title="Designer" />
        <TeamMember
          name="Giulianna Russi"
          portrait={placeholder}
          title="Developer, Cybersecurity Analyst"
        />
        <TeamMember
          name="Laura Castro"
          portrait={placeholder}
          title="Developer"
        />
      </ul>
    </div>
  );
};

export { Team };
