import { useState } from 'react'
import Navbar from "./components/Navbar"
import TextInput from "./components/TextInput"
import Modal from "./components/Modal"
import "./css/reset.css"
import "./css/global.css"
import "./css/components.css"
import "./css/forms.css"

function App() {
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const formContent = () => {
    return (<form action="" method="GET" className="login-button-container">
      <TextInput
        label="Username"
        disabled={false}
        withIcon={false}
      />
      <TextInput
        label="Password"
        disabled={false}
        withIcon={false}
        inputType='password'
      />
      <div>
        <button className="button-primary" style={{ marginRight: "20px" }}>Register</button>
        <button className="button-tertiary">Log In</button>
      </div>
    </form>)
  }

  return (
    <div className="page-content">
      <Navbar
        state={loginModalOpened}
        setState={setLoginModalOpened}
      />
      <Modal
        state={loginModalOpened}
        setState={setLoginModalOpened}
        header="Login to Smidgen"
        content={formContent()}
      />
      <div className="content">
        <button className="button-primary" disabled={false} >Primary Button</button>
        <button className="button-tertiary" disabled={false} >Tertiary Button</button>
        <button className="button-info" disabled={false} >Info Button</button>
        <button className="button-destructive" disabled={false} >Destructive Buton</button>

        <input type="checkbox" className='toggle' />
        
        <h2>Need to edit Select</h2>
        <select>
          <option>The quick brown fox jumps over the lazy dog</option>
          <option>The quick brown fox jumps over </option>
          <option>The quick the lazy dog</option>
          <option>The quick dog</option>
        </select>
      </div>
    </div>
  )
}

export default App
