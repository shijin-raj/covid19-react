import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Card from './components/Card';
// import CardButton from './components/CardButton';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
    stateData:[],
    stats:[],
    indiaStats:{}
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
      const filteredData=data.state_meta_data.filter((state_meta)=>state_meta.abbreviation!=='TT');
      this.setState({
        stateData:filteredData
      });
    }).catch(error=>{
      console.log(error);
    })
  }

  getStatsFromAPI=()=>{
    const api_url="https://api.covid19india.org/v4/data.json";
    fetch(api_url,{
      method:'GET',
      mode:'cors',
    }).then(res=>{
      return res.json();
    }).then(data=>{
      var stateIndex = this.state.stateData;
      var stats=[];
      stateIndex.map(st=>{
        let stateStats=data[st.abbreviation];
        if(stateStats===undefined){
          return stats;
        }
        if(stateStats.state_name==='TT')
        {
          this.setState({
            indiaStats:{
              population:st.population,
          confirmed:stateStats.total.confirmed,
          recovered:stateStats.total.recovered,
          tested:stateStats.total.tested,
          deceased:stateStats.total.deceased
            }
          });
        }
        let stats_temp = {
          stateCode:st.abbreviation,
          state_name:st.stateut,
          population:st.population,
          confirmed:stateStats.total.confirmed,
          recovered:stateStats.total.recovered,
          tested:stateStats.total.tested,
          deceased:stateStats.total.deceased
        }
        stats.push(stats_temp);
        return stats;
      });
      this.setState({
        stats:stats
      });
      console.log(this.state.stats);
    }).catch(error=>{
      console.log(error);
    })
  }

  componentDidMount(){
    this.getDataFromAPI();
    this.getStatsFromAPI();
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>COVID 19 TRACKER - INDIA</h1>
        </header>
        {this.state.stats.map(st => (
          <Card key={st.stateCode} stateData={st}/>
        ))}
        <footer>
          <h3>COVID 19 TRACKER PROJECT - SHIJIN RAJ 2021</h3>
        </footer>
      </div>
    );
  }
}

export default App;
