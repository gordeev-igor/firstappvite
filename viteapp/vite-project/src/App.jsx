
import './App.css';
import Login from './Login';
import styled from 'styled-components';


function App() {

  return (
    <Container>
      <Login/>
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`;

export default App
