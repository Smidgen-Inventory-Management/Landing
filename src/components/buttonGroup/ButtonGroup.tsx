import '../../css/components.css';
import { ButtonGroupButton } from './ButtonGroupButton';
import React from 'react';

// Define the ButtonGroupButton type
type ButtonGroupButtonElement = React.ReactElement<typeof ButtonGroupButton>;

interface ButtonGroupProps {
  children: ButtonGroupButtonElement | ButtonGroupButtonElement[];
  [props: string]: any;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...rest }) => {
  return (
    <div className="button-group-container" {...rest}>
      {children}
    </div>
  );
};

export { ButtonGroup };
