import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ToolbarAlignmentMenu from './ToolbarAlignmentMenu';
import ToolbarBackgroundMenu from './ToolbarBackgroundMenu';
import ToolbarBorderMenu from './ToolbarBorderMenu';
import ToolbarItem from './ToolbarItem';
import ToolbarMarginMenu from './ToolbarMarginMenu';
import useKeyPress from '../../hooks/useKeyPress';

import './Toolbar.scss';

function Toolbar(props) {
  const { activeMenu, setActiveMenu, onClose } = props;

  const toggleMenu = menu => setActiveMenu(menu === activeMenu ? '' : menu);

  return (
    <div className="toolbar">
      <ToolbarItem
        icon="image"
        active={activeMenu === 'background'}
        onClick={() => toggleMenu('background')}
      />
      <ToolbarItem
        icon="margin"
        active={activeMenu === 'margin'}
        onClick={() => toggleMenu('margin')}
      />
      <ToolbarItem
        icon="border"
        active={activeMenu === 'border'}
        onClick={() => toggleMenu('border')}
      />
      <ToolbarItem
        icon="align-middle"
        active={activeMenu === 'alignment'}
        onClick={() => toggleMenu('alignment')}
      />
      <ToolbarItem
        icon="move"
        onClick={onClose}
      />
      <ToolbarItem
        icon="duplicate"
        onClick={onClose}
      />
      <ToolbarItem
        icon="trash"
        onClick={onClose}
      />
      {activeMenu === 'background' && (
        <ToolbarBackgroundMenu />
      )}
      {activeMenu === 'margin' && (
        <ToolbarMarginMenu />
      )}
      {activeMenu === 'border' && (
        <ToolbarBorderMenu />
      )}
      {activeMenu === 'alignment' && (
        <ToolbarAlignmentMenu />
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
