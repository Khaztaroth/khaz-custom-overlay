import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ArtOverlay from './pages/segments/overlay_art';
import GamesOverlay from './pages/segments/overlay_games';
import Home from './pages/segments/home';
import Chat from './pages/segments/standalone-chat';

import "./pages/css/gradients.css"
import "./pages/css/blocks.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/art' element={<ArtOverlay />}/>
                <Route exact path='/games' element={<GamesOverlay />}/>
                <Route exact path='/chat' element={<Chat />} />
            </Routes> 
        </Router>
    )
}