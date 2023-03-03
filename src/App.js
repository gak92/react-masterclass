import './App.css';

function App() {
  let name = 'react-app';

  console.log('App');

  return (
    <div className="App">
      <div className="App-header">
        Hello World {name}
        <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {

  console.log('Demo');
  
  return (
    <div className="App">
      <div className="App-header">
        Demo child
      </div>
    </div>
  );
}

export default App;
