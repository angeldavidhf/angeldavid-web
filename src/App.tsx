import { Route, Routes } from 'react-router-dom';

import About from '@pages/About';
import Resume from '@pages/Resume';
import Portfolio from '@pages/Portfolio';
import Blog from '@pages/Blog';
import Contact from '@pages/Contact';

import Sidebar from "@organisms/Sidebar";
import Menu from "@organisms/Menu";
import PopUp from "@organisms/PopUp";

function App() {
    return (
        <>
            <main className="main">
                <div className="container gutter-top gutter-bottom">
                    <div className="row sticky-parent">
                        <Sidebar></Sidebar>
                        <div className="col-12 col-md-12 col-xl-9">
                            <div className="box-outer">
                                <Menu></Menu>
                                <Routes>
                                    <Route path="" element={<About/>}/>
                                    <Route path="about" element={<About/>}/>
                                    <Route path="resume" element={<Resume/>}/>
                                    <Route path="portfolio" element={<Portfolio/>}/>
                                    <Route path="blog" element={<Blog/>}/>
                                    <Route path="contact" element={<Contact/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="back-to-top"></div>
            <PopUp popUpId={'review-1'} imageSrc={'/src/assets/images/avatar-1.png'} imageAlt={'Daniel Lewis'} title={'Daniel Lewis'} reviewDate={'14 June, 2021'}>
                <p>Ricardo was hired to create a corporate identity. We were very pleased with the work done.
                    She has a lot of experience and is very concerned about the needs of client.
                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
                    tempor incididunt ut laborels dolore magnarels alia.</p>
                <p>Ut enim ad nesid utminim veniam, quis nostrud eiusmo exercitation ullamco labori is amco
                    commodo consequat seds eiusmod. Adipisicing velit eu eiusmod nisi ad nulla.
                    Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor
                    culpa nisi ea eiusmod do qui culpa consectetur laboris eiusmod anim.</p>
            </PopUp>
            <PopUp popUpId={'review-2'} imageSrc={'/src/assets/images/avatar-2.png'} imageAlt={'Jessica Miller'} title={'Jessica Miller'} reviewDate={'14 June, 2021'}>
                <p>Ricardo was hired to create a corporate identity. We were very pleased with the work done.
                    She has a lot of experience and is very concerned about the needs of client.
                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
                    tempor incididunt ut laborels dolore magnarels alia.</p>
                <p>Ut enim ad nesid utminim veniam, quis nostrud eiusmo exercitation ullamco labori is amco
                    commodo consequat seds eiusmod. Adipisicing velit eu eiusmod nisi ad nulla.
                    Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor
                    culpa nisi ea eiusmod do qui culpa consectetur laboris eiusmod anim.</p>
            </PopUp>
            <PopUp popUpId={'review-3'} imageSrc={'/src/assets/images/avatar-3.png'} imageAlt={'Emily Evans'} title={'Emily Evans'} reviewDate={'14 June, 2021'}>
                <p>Ricardo was hired to create a corporate identity. We were very pleased with the work done.
                    She has a lot of experience and is very concerned about the needs of client.
                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
                    tempor incididunt ut laborels dolore magnarels alia.</p>
                <p>Ut enim ad nesid utminim veniam, quis nostrud eiusmo exercitation ullamco labori is amco
                    commodo consequat seds eiusmod. Adipisicing velit eu eiusmod nisi ad nulla.
                    Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor
                    culpa nisi ea eiusmod do qui culpa consectetur laboris eiusmod anim.</p>
            </PopUp>
            <PopUp popUpId={'review-4'} imageSrc={'/src/assets/images/avatar-4.png'} imageAlt={'Henry William'} title={'Henry William'} reviewDate={'14 June, 2021'}>
                <p>Ricardo was hired to create a corporate identity. We were very pleased with the work done.
                    She has a lot of experience and is very concerned about the needs of client.
                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
                    tempor incididunt ut laborels dolore magnarels alia.</p>
                <p>Ut enim ad nesid utminim veniam, quis nostrud eiusmo exercitation ullamco labori is amco
                    commodo consequat seds eiusmod. Adipisicing velit eu eiusmod nisi ad nulla.
                    Magna deserunt ipsum pariatur sunt incididunt culpa cupidatat. Pariatur occaecat enim dolor
                    culpa nisi ea eiusmod do qui culpa consectetur laboris eiusmod anim.</p>
            </PopUp>
        </>
    );
}

export default App
