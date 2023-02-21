
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, UserInfoTitle, InputInfo, Button, ButtonLogin, UserInfo } from './Styled.js'


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
            <InputInfo type="text"></InputInfo>
          </UserInfo>
          <UserInfo>
            <UserInfoTitle >
              password
            </UserInfoTitle>
            <InputInfo type="password"></InputInfo>
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
