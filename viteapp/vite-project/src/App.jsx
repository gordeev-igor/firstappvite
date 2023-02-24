import './App.css';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';


function App() {

  return (

    <Wrapper>
      <Header />

      <Container>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
        </Routes>
        
      </Container >

      <Footer />
    </Wrapper>



  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1220px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;  

`;

export default App
