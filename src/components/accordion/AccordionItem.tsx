import React, { useState, Fragment } from 'react';
import '../../css/accordion.css';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  [props: string]: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item" {...rest}>
      <button onClick={toggleOpen} className="accordion-header">
        {title}
      </button>
      <span
        className={`accordion-icon accordion-icon-${
          isOpen ? 'shown' : 'hidden'
        }`}
        onClick={toggleOpen}
      />
      <div
        className={`accordion-body ${isOpen ? '' : 'hidden'}`}
        aria-hidden={!isOpen ? true : false}
      >
        <Fragment>{children}</Fragment>
      </div>
    </div>
  );
};

export { AccordionItem };
