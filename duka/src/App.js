import './App.css';

const App = () => {
const name = 'Duka';
const someone = 'someone';
const isnameShowing = true;
  return (
    <div className="App">
      <h1>Hello,{isnameShowing ? name : someone}</h1>
      
    </div>
  );
}

export default App;
