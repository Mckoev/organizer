import './App.css';
import {Route, Routes} from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Map from "./pages/map/Map";
import Tasks from "./pages/tasks/Tasks";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import Page from "./components/page/Page";
import Weather from "./pages/weather/Weather";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        document.title = 'Organizer';
    });

    return (
        <Routes>
            <Route path="/" element={<Page component={Home()}/>}/>
            <Route path="/weather" element={<Page component={Weather()}/>}/>
            <Route path="/calendar" element={<Page component={Calendar()}/>}/>
            <Route path="/map" element={<Page component={Map()}/>}/>
            <Route path="/lists" element={<Page component={Tasks()}/>}/>
            <Route path='/news' element={<Page component={News()}/>}/>
            <Route path="*" element={<Page component={Home()}/>}/>
        </Routes>
    );
}

export default App;
