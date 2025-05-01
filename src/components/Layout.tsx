import { useState, ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded md:hidden"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        >
          <Sidebar onClose={toggleSidebar} />
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
