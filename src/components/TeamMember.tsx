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
      <img className="team-image" src={portrait} alt={`Portrait of ${name}`} />
      <h4 className="team-name" aria-label={name} >{name}</h4>
      <p className="team-title">{title}</p>
    </li>
  );
};

export { TeamMember };
