import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div class="auth">
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Login</Button>
      </div>
    </div>
  )
}

export default App
