
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, FormContentInner, UsernameTitle, PasswordTitle, InputName, InputPass, Button, ButtonLogin, Username, Password } from './Styled.js'


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
          <FormContentInner >
            <Username className="username">
              <UsernameTitle>
                email/username
              </UsernameTitle>
              <InputName type="text"></InputName>
            </Username>
            <Password>
              <PasswordTitle >
                password
              </PasswordTitle>
              <InputPass></InputPass>
            </Password>
            <Button>
              <ButtonLogin type="submit">LOGIN</ButtonLogin>
            </Button>
          </FormContentInner>
        </FormContent>
      </Registration >
    </Container >
  )
}

export default App
