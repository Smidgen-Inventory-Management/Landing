import React, { ReactNode } from 'react';
import '../../css/accordion.css';

interface AccordionProps {
  children: ReactNode;
  [props: string]: any;
}

const AccordionContainer: React.FC<AccordionProps> = ({
  children,
  ...rest
}) => {
  return (
    <div className="accordion" {...rest}>
      {children}
    </div>
  );
};

export { AccordionContainer };
