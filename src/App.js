import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import { List } from './components/List/List';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUser, faCommentDots)

function App() {
  return (
    <div>
      <Header/>
      <List/>
    </div>
  );
}

export default App;
