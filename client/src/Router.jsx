import { Routes, Route } from 'react-router-dom';


import Home from "./pages/Home"
import ReaderUrl from './pages/ReaderUrl';
import ReaderExample from './pages/ReaderExample';


export default function Router() {
    return (
       
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/reader/url" element={ <ReaderUrl />}></Route>
                <Route path="/reader/file" element={ <ReaderUrl />}></Route>
                <Route path="/reader/example" element={ <ReaderExample />}></Route>
            </Routes>
   
    );
}

