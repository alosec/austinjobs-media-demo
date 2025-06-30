import { useState, useEffect, useCallback } from 'react';
import { navigationLinks, brandConfig } from '../config/navigation';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const handleToggle = () => {
      if (isOpen) {
        onClose();
      } else {
        onOpen();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('toggleMobileSidebar', handleToggle);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('toggleMobileSidebar', handleToggle);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onOpen]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="mobile-sidebar-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="mobile-sidebar">
        <div className="mobile-sidebar__header">
          <a href={brandConfig.href} className="mobile-sidebar__logo" onClick={onClose}>
            {brandConfig.name}
          </a>
          <button 
            className="mobile-sidebar__close"
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>
        
        <nav className="mobile-sidebar__nav">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-sidebar__nav-link"
              onClick={onClose}
            >
              <span className="mobile-sidebar__nav-icon">{link.mobileIcon}</span>
              <span className="mobile-sidebar__nav-text">{link.label}</span>
            </a>
          ))}
        </nav>
        
        <div className="mobile-sidebar__footer">
          <p>Austin-based media production</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;