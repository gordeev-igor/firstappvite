
import './App.css';
import Login from './Login';
import Header from './Header';
import Footer from './Footer'; Footer
import styled from 'styled-components';


function App() {

  return (
    <>
      <Header />
      <Container>
        <Login />
      </Container >
      <Footer />
    </>
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
  min-height: 100vh;
`;

export default App
