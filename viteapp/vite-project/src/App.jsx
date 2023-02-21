
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, UsernameTitle, PasswordTitle, InputName, InputPass, Button, ButtonLogin, UserInfo } from './Styled.js'


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
            <UsernameTitle>
              email/username
            </UsernameTitle>
            <InputName type="text"></InputName>
          </UserInfo>
          <UserInfo>
            <PasswordTitle >
              password
            </PasswordTitle>
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
