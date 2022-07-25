import React from 'react';
import './bootstrap.min.css';
// import PersonList from './01_PersonList';
// import PersonAdd from "./01_AddPerson"
import UsersListing from './ReqResApi/UsersListing';


function App() {
    return (
        <div className='container'>

            {/*-----Demo 01----- */}
            {/* <h1>DEMO 01:</h1>
            <PersonAdd />
            <PersonList></PersonList>
            <hr /> */}


            {/*-----Demo 02----- */}
            <h1>DEMO 02:</h1>
            <UsersListing></UsersListing>



        </div>
    )
}

export default App