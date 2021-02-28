import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello VaderERP</h2>
        <Button variant="success">Success</Button>
        <br />
        <Input variant="medium" />
      </header>
    </div>
  );
}

export default App;
