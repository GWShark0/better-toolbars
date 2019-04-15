import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ToolbarAlignmentToggle from './ToolbarAlignmentToggle';
import ToolbarBackgroundMenu from './ToolbarBackgroundMenu';
import ToolbarBorderMenu from './ToolbarBorderMenu';
import ToolbarItem from './ToolbarItem';
import ToolbarMarginMenu from './ToolbarMarginMenu';
import Icon from '../Icon';
import useKeyPress from '../../hooks/useKeyPress';

import './Toolbar.scss';

function Toolbar(props) {
  const { activeMenu, setActiveMenu, onClose } = props;

  const toggleMenu = menu => setActiveMenu(menu === activeMenu ? '' : menu);

  return (
    <div className="toolbar">
      <ToolbarItem
        active={activeMenu === 'background'}
        onClick={() => toggleMenu('background')}
      >
        <Icon id="image" />
      </ToolbarItem>
      <ToolbarItem
        active={activeMenu === 'margin'}
        onClick={() => toggleMenu('margin')}
      >
        <Icon id="margin" />
      </ToolbarItem>
      <ToolbarItem
        active={activeMenu === 'border'}
        onClick={() => toggleMenu('border')}
      >
        <Icon id="border" />
      </ToolbarItem>
      <ToolbarItem
        inline
        active={activeMenu === 'alignment'}
        onClick={() => setActiveMenu('alignment')}
      >
        <ToolbarAlignmentToggle />
      </ToolbarItem>
      <ToolbarItem onClick={onClose}>
        <Icon id="move" />
      </ToolbarItem>
      <ToolbarItem onClick={onClose}>
        <Icon id="duplicate" />
      </ToolbarItem>
      <ToolbarItem onClick={onClose}>
        <Icon id="trash" />
      </ToolbarItem>
      {activeMenu === 'background' && (
        <ToolbarBackgroundMenu />
      )}
      {activeMenu === 'margin' && (
        <ToolbarMarginMenu />
      )}
      {activeMenu === 'border' && (
        <ToolbarBorderMenu />
      )}
    </div>
  );
}

function ToolbarWrapper(props) {
  const { active, onClose, children } = props;
  const [activeMenu, setActiveMenu] = useState('');

  const escapeKeyPressed = useKeyPress('Escape');
  escapeKeyPressed && onClose();

  useEffect(() => {
    const checkFocus = (event) => {
      const toolbar = document.getElementById('toolbar');
      if (!toolbar.contains(event.target)) {
        setActiveMenu('');
        onClose();
      }
    };

    window.addEventListener('click', checkFocus);
    return () => window.removeEventListener('click', checkFocus);
  }, []);

  const className = classNames(
    'toolbar-wrapper',
    !!activeMenu && 'toolbar-wrapper--active',
  );

  return (
    <div id="toolbar" className={className}>
      {active && (
        <Toolbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onClose={onClose}
        />
      )}
      {children}
    </div>
  )
}

export default ToolbarWrapper;
