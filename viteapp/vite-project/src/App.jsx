
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, FormContentInner, UsernameTitle, PasswordTitle, InputName, InputPass, Button, ButtonLogin } from './Styled.js'


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
            <div className="username">
              <UsernameTitle>
                email/username
              </UsernameTitle>
              <InputName type="text"></InputName>
            </div>
            <div className="password">
              <PasswordTitle >
                password
              </PasswordTitle>
              <InputPass type="password"></InputPass>
            </div>
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
