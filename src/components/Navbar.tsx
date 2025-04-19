
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  return (
    <nav className={`w-full py-4 px-6 flex justify-between items-center ${transparent ? 'bg-transparent' : 'bg-white'}`}>
      <Logo />
      
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-interface-1 hover:text-jadeite transition-colors">Products</a>
        <a href="#" className="text-interface-1 hover:text-jadeite transition-colors">Features</a>
        <a href="#" className="text-interface-1 hover:text-jadeite transition-colors">Pricing</a>
        <a href="#" className="text-interface-1 hover:text-jadeite transition-colors">FAQ</a>
      </div>
      
      <button className="bg-jadeite text-white rounded-lg px-4 py-2 flex items-center gap-1">
        EN <ChevronDown size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
