
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, UserInfoTitle, InputName, InputPass, Button, ButtonLogin, UserInfo } from './Styled.js'


function App() {

  return (
    <Container>
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
            <InputName type="text"></InputName>
          </UserInfo>
          <UserInfo>
            <UserInfoTitle >
              password
            </UserInfoTitle>
            <InputPass type="password"></InputPass>
          </UserInfo>
          <Button>
            <ButtonLogin type="submit">LOGIN</ButtonLogin>
          </Button>
        </FormContent>
      </Registration >
    </Container >
  )
}

export default App
