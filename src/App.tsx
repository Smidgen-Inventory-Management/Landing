import { useState } from 'react';
import { Navbar, TextInput, Modal } from './components';
import { Home, Feature, Team } from './pages';

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
    <div className="body" id="home">
      <Navbar state={loginModalOpened} setState={setLoginModalOpened} />
      <Modal
        state={loginModalOpened}
        setState={setLoginModalOpened}
        header="Login to Smidgen"
        content={formContent()}
      />
      <div className="content">
        <section>
          <Home />
        </section>

        <section id="feature" className="feature-container">
          <Feature />
          <Feature />
          <Feature />
        </section>

        <section id="team">
          <Team />
        </section>
      </div>
    </div>
  );
}

export default App;
