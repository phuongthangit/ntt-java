import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';

//Constants
import LinkName from './constants/linkName';

import Layout from './screens/Layout/Layout';


//change password
const FormRegisterScreen = React.lazy(() => import("./screens/FormRegister/FormRegister"));




function App() {
    /**
     * render template
     */
    return (
        <React.Suspense fallback={<></>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={LinkName.FORM_REGISTER} element={<FormRegisterScreen />} />
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default App;