import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Exhibit name='IPv4'><GetIP ipType='4'></GetIP></Exhibit>
      <Exhibit name='IPv6'><GetIP ipType='6'></GetIP></Exhibit>
      <Exhibit name='Latency'><GetLatency></GetLatency></Exhibit>
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
  let [ipAddress, updateIP] = useState('...');
  if(props.ipType == '4'){
    fetch("https://api.ipify.org")
    .then((response) => response.text())
    .then((text) => {
      updateIP(text);
    });
  }else if(props.ipType == '6'){
    fetch("https://api64.ipify.org")
    .then((response) => response.text())
    .then((text) => {
      updateIP(text);
    });
  }else{
    console.log("invalid IP type");
  }
  return (<p>{ipAddress}</p>)
}

function GetLatency(){
  const ws = new WebSocket('ws://localhost:55455');
  let latency = 0;
  ws.onmessage = (event) => {
      latency = Date.now() - event.data;
  }
  return (<p>{latency} ms</p>)
}


export default App;
