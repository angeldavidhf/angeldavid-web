import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import useScript from '@hooks/useScript';

import DrawerNavigator from '@organisms/DrawerNavigator';
import HeaderSocialNetworks from '@organisms/HeaderSocialNetworks';

import Home from '@pages/Home';
import Blog from '@pages/Blog';

function App() {
    useScript('/src/assets/js/browser.min.js');
    useScript('/src/assets/js/breakpoints.min.js');
    useScript('/src/assets/js/util.js');
    useScript('/src/assets/js/main.js');

    return (
        <>
            <div id="main">
                <div className="inner">
                    <HeaderSocialNetworks />
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
            <DrawerNavigator />
        </>
    )
}

export default App
