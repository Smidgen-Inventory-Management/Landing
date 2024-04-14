import { useState } from 'react';
import { Navbar, TextInput, Modal } from './components';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/reset.css';
import './css/global.css';
import './css/forms.css';
import './css/components.css';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
