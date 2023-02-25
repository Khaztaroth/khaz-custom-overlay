import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ArtOverlay from './components/pages/art_overlay';
import GamesOverlay from './components/pages/games_overlay';
import Home from './components/pages/blocks/home';
import Chat from './components/pages/blocks/chat';

import "./app.css"
import ChatlessArtOverlay from './components/pages/chatless-art-overlay';
import ChatlessGamesOverlay from './components/pages/chatless-games-overlay';

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