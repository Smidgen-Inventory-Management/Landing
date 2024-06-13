import React, { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headerLevels: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headerLevels }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headerSelector = headerLevels
      .map((level) => `section ${level}`)
      .join(',');
    const elements = Array.from(document.querySelectorAll(headerSelector)).map(
      (element) => ({
        id: element.id,
        text: element.innerHTML,
        level: Number(element.nodeName.charAt(1)),
      })
    );

    setHeadings(elements);
  }, [headerLevels]);

  return (
    <nav className="toc-container">
      <ul className="toc">
        {headings.map((heading) => (
          <li key={heading.text} className={getClassName(heading.level)}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const getClassName = (level: number): string => {
  switch (level) {
    case 1:
      return 'toc-l1';
    case 2:
      return 'toc-l2';
    case 3:
      return 'toc-l3';
    case 4:
      return 'toc-l4';
    case 5:
      return 'toc-l5';
    case 6:
      return 'toc-l6';
    default:
      return '';
  }
};
export { TableOfContents };
