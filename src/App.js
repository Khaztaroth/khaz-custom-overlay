import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home, ArtOverlay, GamesOverlay, Chat} from './pages/segments'
import { chatClient } from './components/api-requests/twurple-client';

import "./pages/style/gradients.css"
import "./pages/style/blocks.css"

chatClient.connect();

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