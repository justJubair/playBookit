import { useState } from "react";
import { Menu, X, Home, BarChart2, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: Home, text: "Dashboard" },
    { icon: BarChart2, text: "Analytics" },
    { icon: Users, text: "Users" },
    { icon: Settings, text: "Settings" },
  ];

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-secondaryPink text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition duration-200 ease-in-out z-10 bg-black overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          <Link to="/" className="mt-4 mb-2">
            <p
              className="text-secondaryPink
             text-xl text-center font-semibold matemasie-regular"
            >
              Play<span className="text-primaryYellow">BookIt</span>
            </p>
          </Link>
          <nav className="flex-1 px-2 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                to="/"
                key={index}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-md transition duration-150 ease-in-out"
              >
                <item.icon className="mr-3 h-6 w-6 text-secondaryPink" />
                <span>{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
