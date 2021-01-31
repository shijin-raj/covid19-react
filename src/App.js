import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    stateData:[]
    };
  }

  getDataFromAPI = ()=>{
    const api_url="https://api.covid19india.org/misc.json";
    fetch(api_url,{
      method:'GET',
      mode:'cors',
    }).then(res=>{
      return res.json();
    }).then(data=>{
      console.log(data);
      this.setState({
        stateData:data.state_meta_data
      });
    }).catch(error=>{
      console.log(error);
    })
  }


  componentDidMount(){
    this.getDataFromAPI();
  }
  render() {
    return (
      <div className="App">
        {this.state.stateData.map(st => (
          <Card key={st.abbreviation} stateData={st}/>
        ))}
      </div>
    );
  }
}

export default App;
