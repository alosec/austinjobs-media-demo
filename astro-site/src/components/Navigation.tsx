import { useState, useEffect } from 'react';
import { navigationLinks, brandConfig } from '../config/navigation';

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleMobileMenuToggle = () => {
    window.dispatchEvent(new CustomEvent('toggleMobileSidebar'));
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href={brandConfig.href} className="logo">
          {brandConfig.name}
        </a>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`nav-link ${currentPath === link.href ? 'active' : ''} ${link.className || ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-button"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
          aria-expanded="false"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;