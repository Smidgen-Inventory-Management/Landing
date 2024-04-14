import { useState } from 'react';
import { Navbar, TextInput, Modal, Footer } from './components';
import { Home, Feature, Team } from './pages';

import './css/reset.css';
import './css/global.css';
import './css/forms.css';
import './css/components.css';
import placeholder from './assets/placeholder.png';
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
  const featureList: string[] = ['item1', 'item2', 'item3'];

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
          <Feature
            featureName="A feature"
            featureBrief="A brief"
            featureBullets={featureList}
            featureImage={placeholder}
          />
          <Feature
            featureName="A feature"
            featureBrief="A brief"
            featureBullets={featureList}
            featureImage={placeholder}
            imageRight={true}
          />
          <Feature
            featureName="A feature"
            featureBrief="A brief"
            featureBullets={featureList}
            featureImage={placeholder}
          />
        </section>

        <section id="team">
          <Team />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
