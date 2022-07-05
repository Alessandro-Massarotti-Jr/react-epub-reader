import { Routes, Route } from 'react-router-dom';


import Home from "./pages/Home"
import Reader from './pages/Reader';
import ReaderExample from './pages/ReaderExample';


export default function Router() {
    return (
       
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/reader" element={ <Reader />}></Route>
                <Route path="/example" element={ <ReaderExample />}></Route>
            </Routes>
   
    );
}

