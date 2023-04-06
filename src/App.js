import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home, ArtOverlay, GamesOverlay, DisplayChat} from './pages/segments'

import "./pages/css/gradients.css"
import "./pages/css/blocks.css"
import "./pages/css/chat.css"

import { chatClient } from './components/api-requests/twurple-client';

chatClient.connect();
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/art' element={<ArtOverlay />}/>
                <Route exact path='/games' element={<GamesOverlay />}/>
                <Route exact path='/chat' element={<DisplayChat />} />
            </Routes> 
        </Router>
    )
}