import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  items: { label: string; content: string[] }[];
}

export default function Dropdown({ items }: DropdownProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex gap-4'>
      {items.map((item, index) => (
        <div
          key={index}
          className='relative'
        >
          <button
            className='flex justify-center items-center h-8 w-32 gap-2 p-2 rounded-md text-white bg-cyan-800'
            onClick={() => toggleDropdown(index)}
          >
            {item.label} <FontAwesomeIcon icon={ activeIndex && activeIndex === index ? faCaretUp : faCaretDown} />
          </button>

          {activeIndex === index && (
            <div className='absolute top-full w-full flex flex-col bg-white border border-cyan-600 rounded-sm shadow-md'>
              {item.content.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href='#'
                  className='p-2 hover:bg-gray-200 rounded-sm'
                >
                  {subItem}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
