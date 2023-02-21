import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ArtOverlay from './components/pages/art_overlay';
import GamesOverlay from './components/pages/games_overlay';
import Home from './components/pages/blocks/home';

import "./app.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/art' element={<ArtOverlay />}/>
                <Route exact path='/games' element={<GamesOverlay />}/>
            </Routes> 
        </Router>
    )
}