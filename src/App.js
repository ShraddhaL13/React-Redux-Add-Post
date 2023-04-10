import './App.css';
import Navbar from './Navbar';
import PostList from './fretures/posts/PostList';
import { AddPstForm } from './fretures/posts/AddPstForm';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <main className="container-fluid">
        <AddPstForm />
        <PostList />

      </main>
      </div>
    </>
  );
}

export default App;
