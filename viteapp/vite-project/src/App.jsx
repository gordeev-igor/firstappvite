
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, UsernameTitle, PasswordTitle, InputName, InputPass, Button, ButtonLogin, Username, Password } from './Styled.js'


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
            <InputPass type="password"></InputPass>
          </Password>
          <Button>
            <ButtonLogin type="submit">LOGIN</ButtonLogin>
          </Button>
        </FormContent>
      </Registration >
    </Container >
  )
}

export default App
