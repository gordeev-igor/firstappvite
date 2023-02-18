import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          Welcome.
        </div>
        <div className="subtitle">
          Hello, nice to se you again!
        </div>

        <div className="form">
          <div className="form__content">
            <div className="form__content-login">
              <p>email/username</p>
              <form className="login">
                <input class="input__name" type="text" placeholder="username"></input>
              </form>
            </div>
            <div className="form__content-pass">
              <p>email/username</p>
              <form className="form__content-pass">
                <input class="input__pass" type="password" placeholder="password"></input>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
