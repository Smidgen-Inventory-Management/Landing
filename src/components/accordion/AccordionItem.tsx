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
      <button className="accordion-header" onClick={toggleOpen}>
        {title}
        <span
          className={`accordion-icon accordion-icon-${
            isOpen ? 'shown' : 'hidden'
          }`}
        />
      </button>
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
