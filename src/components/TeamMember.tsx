import '../css/team.css';
import React from 'react';

interface TeamMemberProps {
  name: string;
  portrait: string;
  title?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, portrait, title }) => {

  return (
    <li className="team-member">
      <img className="team-image" src={portrait} alt={name} />
      <h5 className="team-name">{name}</h5>
      <p className="team-title">{title}</p>
    </li>
  );
};

export { TeamMember };
