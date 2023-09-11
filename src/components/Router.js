import { Route, Router, Routes } from "react-router-dom";
import Quran from "./Quran";
import Show from "./Show";


function Router_Pages () {
    return(
            <Routes>
                <Route path="/" element={<Quran/>}></Route>
                <Route path="/Show" element={<Show/>}></Route>
            </Routes>
    )
}

export default Router_Pages;