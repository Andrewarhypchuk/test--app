import './App.css';
import 'antd/dist/reset.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />  
      <LoginForm />
    </div>
  );
}

export default App;
