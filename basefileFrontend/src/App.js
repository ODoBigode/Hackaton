import logo from './logo.svg';
import './App.css';
import { UserCreation } from './components/SingnUp';
import { UserLogin } from './components/LogIn';

function App() {
  return (
    <div className="App">
      <UserCreation />
      <UserLogin />
    </div>
  );
}

export default App;
