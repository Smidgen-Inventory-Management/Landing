import { useState } from 'react';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import Modal from './components/Modal';
import BrowserWindow from './components/BrowserWindow';
import placeholder from './assets/placeholder.png';
import './css/reset.css';
import './css/global.css';
import './css/forms.css';
import './css/components.css';
import './css/hero.css';

function App() {
  const [loginModalOpened, setLoginModalOpened] = useState(false);

  const formContent = () => {
    return (
      <form action="" method="GET" className="login-button-container">
        <TextInput
          label="Username"
          disabled={false}
          withIcon={false}
          autoComplete="username"
        />
        <TextInput
          label="Password"
          disabled={false}
          withIcon={false}
          inputType="password"
          autoComplete="current-password"
        />
        <div>
          <button className="button-primary" style={{ marginRight: '20px' }}>
            Register
          </button>
          <button className="button-tertiary">Log In</button>
        </div>
      </form>
    );
  };

  return (
    <div className="body">
      <Navbar state={loginModalOpened} setState={setLoginModalOpened} />
      <Modal
        state={loginModalOpened}
        setState={setLoginModalOpened}
        header="Login to Smidgen"
        content={formContent()}
      />
      <div className="content">
        <div className="hero">
          <h1 className="hero-header">SMIDGEN</h1>
          <p className="hero-text">
            Reclaim a smidgen of your day with a powerful and modular logistics
            management solution.
          </p>
          <button className="hero-button button-tertiary">Learn More</button>
        </div>
        <BrowserWindow
          address="http://smidgen.com/"
          content={
            <img className="browser-image" src={placeholder} alt="placeholder" />
          }
        />
      </div>
    </div>
  );
}

export default App;
