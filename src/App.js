import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage'
import FetchWeather from './pages/FetchWeather'

function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/weather" element={<FetchWeather/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
