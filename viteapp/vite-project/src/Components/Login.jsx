
import '../App.css'
import styled from 'styled-components';
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  const inputInfo = (e) => {
    e.preventDefault()
    if (login == 'user' && password == 'pass') {
      navigate('/about')
    }
    else {
      setIncorrect(true);
      setLogin(e.target.value);
      setPassword(e.target.value);
    }

  };


  return (
    <Registration>
      <Title>
        Welcome.
      </Title>
      <Subtitle>
        Hello, nice to se you again!
      </Subtitle>
      <FormContent>
        <UserInfo>
          <UserInfoTitle>
            email/username
          </UserInfoTitle>
          <InputInfo type="text" value={login} onChange={e => setLogin(e.target.value)}></InputInfo>
        </UserInfo>
        <UserInfo>
          <UserInfoTitle >
            password
          </UserInfoTitle>
          <InputInfo type="password" value={password} onChange={e => setPassword(e.target.value)}></InputInfo>
        </UserInfo>
        <Button>
          <ButtonLogin onClick={inputInfo} type="submit">LOGIN</ButtonLogin>
        </Button>
        {incorrect && <Incorrect >
          Invalid username or password
        </Incorrect>}
      </FormContent>
    </Registration >
  )
}





const Registration = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 600px;
  width: calc(100% - 32px);
  padding: 15px 0;
  
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Hammersmith One";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #464655;
  `;

const Subtitle = styled.h3`
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #68A691;
`;

const FormContent = styled.form`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  gap: 27px;
  border: 3px solid #464655;
  width: 100%;
  height: fit-content;
  border-radius: 30px;
  padding: 63px 56px 43px;
`;



const UserInfo = styled.div`
`;

const UserInfoTitle = styled.div`
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #68A691;
`;

const InputInfo = styled.input`
  width: 100%;
  height: 53px;
  background-color: #F4F4F9;
  border-radius: 3px;
  font-size: 30px;
  padding-left: 9px;
    
  &:hover{
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;


const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
`;

const ButtonLogin = styled.button`
  text-align: center;
  font-family: 'Hammersmith One';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #464655;
  background-color: #68A691;
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    opacity: 0.95;
  }
`;

const Incorrect = styled.div`
  font-family: "Hammersmith One";
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: red;
`;


export default Login
