import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editor from './pages/Editor';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:roomId" element={<Editor />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
