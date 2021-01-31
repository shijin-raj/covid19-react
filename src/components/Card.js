import React, { Component } from 'react'
import '../card.css';
import Counter from '../components/Counter'
class Card extends Component{
constructor(props){
    super(props);
    this.state={
        display:"none",
    }
}
grow=()=>{
    if(this.state.display!=="block"){
        this.setState({display:"block"});
    
    }    else{
        this.setState({display:"none"});
    }
}
    render(){
        const stateData=this.props.stateData;
       // const recovery_perc = (parseInt(stateData.recovered)/parseInt(stateData.confirmed))*100;
        //const death_perc = (parseInt(stateData.deceased)/parseInt(stateData.confirmed))*100;
        const test_positivity = ((parseInt(stateData.confirmed)/parseInt(stateData.tested))*100).toFixed(2);
        return (
            <div className='card' onClick={this.grow} style={{background:this.state.color}}>
                <img className='bgimage' src="/img/virus.png" alt=""/>
                <h3>{stateData.state_name}</h3>
                <div style={{display:this.state.display}}>

                <Counter counterTitle="Population" counterValue={parseInt(stateData.population).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Tested" counterValue={parseInt(stateData.tested).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Confirmed" counterValue={parseInt(stateData.confirmed).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Positivity Rate" counterValue={test_positivity+"%"} progress="100%"/>
                <Counter counterTitle="Recovered" counterValue={parseInt(stateData.recovered).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Deceased" counterValue={parseInt(stateData.deceased).toLocaleString()} progress="100%"/>
                </div>
            </div>
        );
    }
}

export default Card;