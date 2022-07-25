import React from 'react';
import ReactDOM from 'react-dom/client';
// import ComponentAppDemos from './01_Components/App'
// import PropsAppDemos from './02_Props/App'
// import StateAppDemos from './03_State/App';
// import FormsAppDemos from './04_EventsAndForms/App';
// import App1 from './05_Routing/App1';
// import App2 from './05_Routing/App2';
// import ChildrenPropsApp from './06_ChildrenProps/App';
// import AppGlobalContext from './07_GlobalContext/App';
import AppClientServer from './08_ClientServer/App';


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

        {/* 06 Props.Children-------------------------*/}
        {/* <ChildrenPropsApp></ChildrenPropsApp> */}

        {/* 07 Global Context State-------------------------*/}
        {/* <AppGlobalContext></AppGlobalContext> */}


        {/* 08 Global State-------------------------*/}
        <AppClientServer />




    </>);

//ROUTING
