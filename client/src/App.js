import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'black', color: 'white', padding: '12px'}}>Vue App Crud</h1>
      <BrowserRouter>
      <Routes>
        <Route path="add" element={<AddPost />} exact/>
        <Route path="edit/:postid" element={<EditPost />} exact/>
        <Route path="/" element={<PostList />} exact/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
