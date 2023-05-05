import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home, Overlay, Chat} from './pages/segments'
import { chatClient } from './components/api-requests/twurple-client';

chatClient.connect();

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/overlay' element={<Overlay />}/>
                <Route exact path='/chat' element={<Chat />} />
            </Routes> 
        </Router>
    )
}