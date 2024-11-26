import { Route, Routes } from 'react-router-dom';

import DrawerNavigator from '@organisms/DrawerNavigator';
import SocialNetworks from '@organisms/SocialNetworks';

import Home from '@pages/Home';
import About from '@pages/About';
import Portfolio from '@pages/Portfolio'
import Blog from '@pages/Blog';

function App() {
    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header id="header">
                            <SocialNetworks/>
                        </header>
                        <Routes>
                            <Route path="" element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="portfolio" element={<Portfolio/>}/>
                            <Route path="blog" element={<Blog/>}/>
                        </Routes>
                    </div>
                </div>
                <DrawerNavigator />
            </div>
        </>
      );
}

export default App
