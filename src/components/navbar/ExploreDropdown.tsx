import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDownShort } from 'react-icons/bs';

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
}

const ExploreDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems: DropdownItem[] = [
    {
      label: 'Animations',
      path: '/animations',
      description: 'Explore beautiful animations',
    },
    {
      label: 'Interactions',
      path: '/interactions',
      description: 'Interactive components',
    },
    {
      label: 'Layouts',
      path: '/layouts',
      description: 'Layout transitions',
    },
    {
      label: 'Page Transitions',
      path: '/page-transitions',
      description: 'Smooth page transitions',
    },
    {
      label: 'Components',
      path: '/components',
      description: 'Reusable components',
    },
    {
      label: 'Experiments',
      path: '/experiments',
      description: 'Try new features',
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200 focus:outline-none"
      >
        Explore
        <BsArrowDownShort
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-2 w-96 bg-white text-gray-900 rounded-lg shadow-2xl z-50 p-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Optional: Add a footer or more items */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/explore-all"
                onClick={() => setIsOpen(false)}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View All →
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExploreDropdown;
