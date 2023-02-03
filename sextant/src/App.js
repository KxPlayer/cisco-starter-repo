import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Exhibit name='IPv4'><GetIP ipType='4'></GetIP></Exhibit>
      <Exhibit name='IPv6'><GetIP ipType='6'></GetIP></Exhibit>
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

function GetIP(props){
  let returnText = "...";
  if(props.ipType == '4'){
    fetch("https://api.ipify.org")
    .then((response) => response.text())
    .then((text) => {
      console.log(text); 
      returnText = text;
    });
  }else if(props.ipType == '6'){
    fetch("https://api64.ipify.org")
    .then((response) => response.text())
    .then((text) => {
      console.log(text); 
      returnText = text;
    });
  }else{
    console.log("invalid ip type");
  }
  console.log(returnText);
  return (<p>{returnText}</p>);
  
}


export default App;
