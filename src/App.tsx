import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Map from "./pages/map/Map";
import Tasks from "./pages/tasks/Tasks";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Weather from "./pages/weather/Weather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="map" element={<Map />} />
        <Route path="lists" element={<Tasks />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
