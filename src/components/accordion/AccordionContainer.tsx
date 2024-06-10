import React, { ReactNode } from 'react';
import '../../css/accordion.css'

interface AccordionProps {
  children: ReactNode;
}

const AccordionContainer: React.FC<AccordionProps> = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

export { AccordionContainer };
