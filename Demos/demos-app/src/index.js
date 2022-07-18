import React from 'react';
import ReactDOM from 'react-dom/client';
// import ComponentAppDemos from './01_Components/App'
// import PropsAppDemos from './02_Props/App'
// import StateAppDemos from './03_State/App';
// import FormsAppDemos from './04_EventsAndForms/App';
// import App1 from './05_Routing/App1';
// import App2 from './05_Routing/App2';
import Component1 from './07_Context/Components';
import ChildrenApps from './06_ChildrenProps/App';

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

        {/* 05 Routing-------------------------*/}
        {/* <App1></App1> */}
        {/* <App2></App2> */}
        {/* <ChildrenApps></ChildrenApps> */}

        <Component1></Component1>

    </>);

//ROUTING
