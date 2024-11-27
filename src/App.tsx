import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Blog from '@pages/Blog';

function App() {
    return (
        <>
            <main className="main">
                <div className="container gutter-top gutter-bottom">
                    <div className="row sticky-parent">
                        <Routes>
                            <Route path="" element={<Home/>}/>
                            <Route path="blog" element={<Blog/>}/>
                        </Routes>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App
