import React from 'react';
import './bootstrap.min.css';
import PersonList from './PersonList';
import PersonAdd from "./AddPerson"
function App() {
    return (
        <div className='container'>

            <PersonList></PersonList>
            <hr />
            <PersonAdd />
        </div>
    )
}

export default App