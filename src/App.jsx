// react router
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// bootstrap components
import Container from 'react-bootstrap/Container';

// components
import Menu from './components/Menu';
import Posts from './components/Posts';
import Newpost from './components/Newpost';
import PostInfo from './components/PostInfo';

function App() {
  
  return (
    <Container className='bg-light'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/newpost' element={<Newpost />} />
          <Route path='/posts/:id' element={<PostInfo />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
