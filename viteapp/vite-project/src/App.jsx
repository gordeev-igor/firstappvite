import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="registration">
          <div className="registration__inner">
            <h1 className="title">
              Welcome.
            </h1>
            <h3 className="subtitle">
              Hello, nice to se you again!
            </h3>
            <div className="form__content">
              <div className="form__content-inner">
                <div className="username">
                  <div className="username__title">
                    email/username
                  </div>
                  <form className="form__login">
                    <input class="input__name" type="text"></input>
                  </form>
                </div>
                <div className="password">
                  <div className="password__title">
                    password
                  </div>
                  <form className="form__pass">
                    <input class="input__pass" type="password"></input>
                  </form>
                </div>
                <button type="submit">LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
