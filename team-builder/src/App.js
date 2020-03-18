import React, { useState } from 'react';

import Form from './components/Form';
import TeamList from './components/Team';
import data from './data';

import './App.css';



function App() {

  const [members, setMembers] = useState(data);
  
  const addNewPerson = person => {
    setMembers([...members, person])
  }

  return (

    <div className="App">
      
      <h1>Team Builder</h1>
      <TeamList teamList={members} />
      <Form addNewPerson={addNewPerson} />
    </div>
  );
}

export default App;
