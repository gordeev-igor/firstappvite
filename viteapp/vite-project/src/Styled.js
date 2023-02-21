
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1220px;
  margin: 0 auto;
  width: calc(100% - 32px);
  height: 100vh;
`;

const Registration = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 600px;
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
  height: 400px;
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














export { Title, Container, Registration, Subtitle, FormContent, UserInfoTitle, InputInfo, Button, ButtonLogin, UserInfo };


