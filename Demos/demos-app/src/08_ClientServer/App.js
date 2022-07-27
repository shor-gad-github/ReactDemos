import React from 'react';
import './bootstrap.min.css';
import PersonList from './01_PersonList';
import PersonAdd from "./01_AddPerson"
import ReqResApi from './02_ReqRes';
// import CrudWithJsonServer from './03_JsonServer';


function App() {
    return (
        <>
            <div className='container'>

                {/*-----Demo 01----- */}
                <h1>DEMO 01:</h1>
                <PersonAdd />
                <PersonList></PersonList>
                <hr />


                {/* -----Demo 02-----  */}
                <h1>DEMO 02:</h1>
                <ReqResApi></ReqResApi>

            </div>

            {/*-----Demo 03 JSON SERVER Using REST API with fetch----- */}
            {/* <CrudWithJsonServer></CrudWithJsonServer> */}

        </>
    )
}

export default App