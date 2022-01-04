import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import AddPost from './AddPost';
import EditPost from './EditPost';

function App() {
  return (
    <div className="App">
      <h1>Vue App Crud</h1>
      <BrowserRouter>
      <Routes>
        <Route path="add" element={<AddPost />} exact/>
        <Route path="edit" element={<EditPost />} exact/>
        <Route path="/" element={<PostList />} exact/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
