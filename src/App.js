import './App.css';
import Home from './pages/Home';
import { GlobalProvider } from './context/GlobalState'
import {Routes,Route} from 'react-router-dom'
import VideoDetails from './pages/VideoDetails';
import VideoAdd from './pages/VideoAdd';
import VideoUpdate from './pages/VideoUpdate';



function App() {
  return (
    <GlobalProvider>  
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/video-details/:id' element={<VideoDetails />}/>
        <Route path='/video-add' element={<VideoAdd />}/>
        <Route path='/video-update/:id' element={<VideoUpdate />}/>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
