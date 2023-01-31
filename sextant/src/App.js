import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <ExhibitCard/>
    </div>
  );
}

function Banner(){
  return (
    <div>
      <h1>{document.title}</h1>
    </div>
  );
}

function Exhibit(props){
  return (
    <div style={{border:'2px solid black', padding:'20px 0px 20px 0px'}}>
      <h2>Card info</h2>
      {props.children}
    </div>
  );
}

function ExhibitCard(){
  return (
    <Exhibit>
      <p>
        Data 1
      </p>
      <p>
        Data 2
      </p>
    </Exhibit>
  );
}

export default App;
