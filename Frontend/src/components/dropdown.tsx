import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

interface DropdownProps {
  label: string;
  content: string[];
}

export default function Dropdown({ label, content }: DropdownProps) {
  const [activeDropdown, setDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div 
      className='flex gap-4'
    >
      <div 
        className='relative'
        ref={dropdownRef}
      >

        <button 
          className='flex justify-center items-center h-8 w-32 gap-2 p-2 rounded-md text-white bg-cyan-800'
          onClick={toggleDropdown}
        >
          {label}{" "}
          <FontAwesomeIcon icon={activeDropdown ? faCaretUp : faCaretDown} />
        </button>

        <div 
          className={`${activeDropdown ? 'flex' : 'hidden'} absolute top-full w-full flex flex-col bg-white border border-cyan-600 rounded-sm shadow-md`}
        >
          {content.map((menu, index) => (
            <NavLink
              to='#'
              key={index}
              className='p-2 hover:bg-gray-200 rounded-sm'
            >
              {menu}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
