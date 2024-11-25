import { Route, Routes } from 'react-router-dom';

import DrawerNavigator from '@organisms/DrawerNavigator.tsx';
import HeaderSocialNetworks from '@organisms/HeaderSocialNetworks.tsx';

import Home from '@pages/Home.tsx';
import Blog from '@pages/Blog.tsx';

function App() {
    return (
        <>
            <div id="wrapper">
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
            </div>
        </>
      );
}

export default App
