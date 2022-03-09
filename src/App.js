import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';

//Constants
import LinkName from './constants/linkName';

import LoadingOverlay from './components/Loading/LoadingOverlay';
import Layout from './screens/Layout/Layout';


//form
const FormRegisterScreen = React.lazy(() => import("./screens/FormRegister/FormRegister"));

//list
const ListUserScreen = React.lazy(() => import("./screens/ListUser/ListUser"));




function App() {
    /**
     * render template
     */
    return (
        <React.Suspense fallback={<LoadingOverlay/>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={LinkName.FORM_REGISTER} element={<FormRegisterScreen />} />
                    <Route path={LinkName.LIST_USER} element={<ListUserScreen />} />
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default App;