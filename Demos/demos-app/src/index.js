import React from 'react';
import ReactDOM from 'react-dom/client';
// import ComponentAppDemos from './01_Components/App'
// import PropsAppDemos from './02_Props/App'
// import StateAppDemos from './03_State/App';
// import FormsAppDemos from './04_EventsAndForms/App';
import AppRouting from './05_Routing/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* 01 Demos------------------------------------*/}
        {/*<ComponentAppDemos></ComponentAppDemos>*/}

        {/* 02 Props------------------------------------*/}
        {/* <PropsAppDemos /> */}

        {/* 03 State------------------------------------*/}
        {/* <StateAppDemos /> */}

        {/* 04 Forms And Events-------------------------*/}
        {/* <FormsAppDemos /> */}

        <AppRouting></AppRouting>
    </>);


