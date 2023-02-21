
import './App.css'

import { Title, Container, Registration, Subtitle, FormContent, FormContentInner, UsernameTitle, PasswordTitle, InputName, InputPass, Button, ButtonLogin } from './Styled.js'


function App() {

  return (
    <div className="App">
      <Container>
        <Registration>
          <div className="ristration__inner">
            <Title>
              Welcome.
            </Title>
            <Subtitle>
              Hello, nice to se you again!
            </Subtitle>
            <FormContent className="form__content">
              <FormContentInner >
                <div className="username">
                  <UsernameTitle className="username__title">
                    email/username
                  </UsernameTitle>
                  <form className="form__login">
                    <InputName type="text"></InputName>
                  </form>
                </div>
                <div className="password">
                  <PasswordTitle >
                    password
                  </PasswordTitle>
                  <form className="form__pass">
                    <InputPass type="password"></InputPass>
                  </form>
                </div>
                <Button>
                  <ButtonLogin type="submit">LOGIN</ButtonLogin>
                </Button>
              </FormContentInner>
            </FormContent>
          </div>
        </Registration >
      </Container >
    </div >
  )
}

export default App
