import { useState } from 'react';
import {
  Navbar,
  TextInput,
  Modal,
  Footer,
  TextInputCategory,
} from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home, About } from './pages';
import './css/reset.css';
import './css/global.css';
import './css/forms.css';
import './css/components.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const formContent = () => {
    return (
      <form action="" method="GET" className="login-button-container">
        <TextInput label="Username" disabled={false} autoComplete="username" />
        <TextInput
          label="Password"
          disabled={false}
          inputType={TextInputCategory.password}
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
    <div>
      <Navbar state={loginModalOpened} setState={setLoginModalOpened} />
      <Modal
        state={loginModalOpened}
        setState={setLoginModalOpened}
        header="Login to Smidgen"
        content={formContent()}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
