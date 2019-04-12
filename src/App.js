import React, { useState } from 'react';
import Image from './components/Image';
import Toolbar from './components/toolbar/Toolbar';

import './App.scss';

function App() {
  const [toolbarActive, setToolbarActive] = useState(false);
  const openToolbar = () => setToolbarActive(true);
  const closeToolbar = () => setToolbarActive(false);

  return (
    <div className="app">
      <Toolbar
        active={toolbarActive}
        onClose={closeToolbar}
      >
        <Image onClick={openToolbar} />
      </Toolbar>
    </div>
  );
}

export default App;
