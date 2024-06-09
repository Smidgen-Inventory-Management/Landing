import React, { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  prefix: string;
  headerLevels: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  prefix,
  headerLevels,
}) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    const headerSelector = headerLevels
      .map((level) => `section ${level}`)
      .join(', ');
    const headers = document.querySelectorAll<HTMLElement>(headerSelector);
    const items: TOCItem[] = [];

    headers.forEach((header, index) => {
      const id = `${prefix.toLowerCase()}-${index + 1}`;
      if (!header.id) {
        header.id = id;
      }
      const level = parseInt(header.tagName.substring(1), 10);
      items.push({
        id: header.id,
        text: header.textContent || `${header.tagName} ${index + 1}`,
        level,
      });
    });

    setTocItems(items);
  }, [headerLevels]);

  const renderTOCItems = (items: TOCItem[], currentLevel: number) => {
    return (
      <ul>
        {items
          .filter((item) => item.level === currentLevel)
          .map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.text}</a>
              {renderTOCItems(
                items.filter(
                  (i) => i.level > currentLevel && i.id.startsWith(`${prefix}-`)
                ),
                currentLevel + 1
              )}
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div id="toc" className="toc">
      <h2>Table of Contents</h2>
      {renderTOCItems(tocItems, 1)}
    </div>
  );
};

export { TableOfContents };
