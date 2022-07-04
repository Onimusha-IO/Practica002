import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/welome';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
