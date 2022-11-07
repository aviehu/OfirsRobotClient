import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import EditPage from "./components/EditPage";
import AddPosition from "./components/AddPosition";
import EditPosition from "./components/EditPosition";
import {useState} from "react";

const ws = new WebSocket('ws://localhost:8080');

function App() {
    const [status, setStatus] = useState("Idle")
    ws.onmessage = ((event) => {
        setStatus(event.data)
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage status={status}/>} />
                <Route path="/editphase/:phase" element={<EditPage/>} />
                <Route path="/addposition/:phase" element={<AddPosition/>} />
                <Route path="/editposition/:phase/:id" element={<EditPosition/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
