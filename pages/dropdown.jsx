import { useState } from "react";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setActiveDropdown(index);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-40    px-4 py-3 bg-white text-sm font-medium text-black    item-center"
          id="menu-button"
          onTouchStart={() => toggleDropdown(props.index)}
          onClick={() => toggleDropdown(props.index)}
          onTouchMove={closeDropdown}
          onTouchEnd={closeDropdown}
          onMouseLeave={closeDropdown}
        >
          <span>{props.Options}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && activeDropdown === props.index && (
        <div
          className="origin-top-right absolute right-0 mt-2 maxw-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 px-3" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              {props.Option1}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              {props.Option2}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              {props.Option3}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
