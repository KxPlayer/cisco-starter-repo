import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Exhibit name='test1'><p>Data 1</p></Exhibit>
      <Exhibit name='test2'><p>Data 2</p></Exhibit>
      <Exhibit name='test3'><p>Data 3</p></Exhibit>
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
      <h2>{props.name}</h2>
      {props.children}
    </div>
  );
}


export default App;
