import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ArtOverlay from './components/pages/segments/art_overlay';
import GamesOverlay from './components/pages/segments/games_overlay';
import Home from './components/pages/segments/home';
import Chat from './components/pages/segments/standalone-chat';

import "./components/pages/css/gradients.css"
import "./components/pages/css/blocks.css"

import ChatlessArtOverlay from './components/pages/segments/chatless-art-overlay';
import ChatlessGamesOverlay from './components/pages/segments/chatless-games-overlay';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/chatless-art' element={<ChatlessArtOverlay />}/>
                <Route exact path='/chatless-games' element={<ChatlessGamesOverlay />}/>
                <Route exact path='/art' element={<ArtOverlay />}/>
                <Route exact path='/games' element={<GamesOverlay />}/>
                <Route exact path='/chat' element={<Chat />} />
            </Routes> 
        </Router>
    )
}