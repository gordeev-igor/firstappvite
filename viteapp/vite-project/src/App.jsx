import './App.css';
import Login from './Login';
import Header from './Header';
import Footer from './Footer'; Footer
import styled from 'styled-components';


function App() {

  return (
    <Wrapper>
      <Header />
      <Container>
        <Login />
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
