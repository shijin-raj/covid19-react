import React, { Component } from 'react'
import '../card.css';
import Counter from '../components/Counter'
class Card extends Component{
    render(){
        const stateData=this.props.stateData;
        return (
            <div className='card'>
                <img className='bgimage' src="/img/virus.png" alt=""/>
                <h3>{stateData.stateut}</h3>
                <Counter counterTitle="Population" counterValue={stateData.population} progress="80%"/>
                <Counter counterTitle="Total people infected" counterValue="1787" progress="70%"/>
                <Counter counterTitle="Total people infected" counterValue="177" progress="60%"/>
                <Counter counterTitle="Total people infected" counterValue="17" progress="45%"/>
            </div>
        );
    }
}

export default Card;