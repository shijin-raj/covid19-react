import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Card from './components/Card';
import Footer from './components/footer/Footer';
import LoadingScreen from './components/loadingscreen/LoadingScreen';
// import CardButton from './components/CardButton';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statewise_data: {},
            india_data: {},
            data_received: false,
            state_meta: {},
        };
    }

    setStateCodes = () => {
        let state_meta = [{ state_code: 'TT', state_name: 'Total' },
            { state_code: 'MH', state_name: 'Maharashtra' },
            { state_code: 'KA', state_name: 'Karnataka' },
            { state_code: 'AP', state_name: 'Andhra Pradesh' },
            { state_code: 'TN', state_name: 'Tamil Nadu' },
            { state_code: 'KL', state_name: 'Kerala' },
            { state_code: 'DL', state_name: 'Delhi' },
            { state_code: 'UP', state_name: 'Uttar Pradesh' },
            { state_code: 'WB', state_name: 'West Bengal' },
            { state_code: 'OR', state_name: 'Odisha' },
            { state_code: 'RJ', state_name: 'Rajasthan' },
            { state_code: 'TG', state_name: 'Telangana' },
            { state_code: 'CT', state_name: 'Chhattisgarh' },
            { state_code: 'HR', state_name: 'Haryana' },
            { state_code: 'BR', state_name: 'Bihar' },
            { state_code: 'GJ', state_name: 'Gujarat' },
            { state_code: 'MP', state_name: 'Madhya Pradesh' },
            { state_code: 'AS', state_name: 'Assam' },
            { state_code: 'PB', state_name: 'Punjab' },
            { state_code: 'JK', state_name: 'Jammu and Kashmir' },
            { state_code: 'JH', state_name: 'Jharkhand' },
            { state_code: 'UT', state_name: 'Uttarakhand' },
            { state_code: 'HP', state_name: 'Himachal Pradesh' },
            { state_code: 'GA', state_name: 'Goa' },
            { state_code: 'PY', state_name: 'Puducherry' },
            { state_code: 'TR', state_name: 'Tripura' },
            { state_code: 'MN', state_name: 'Manipur' },
            { state_code: 'CH', state_name: 'Chandigarh' },
            { state_code: 'AR', state_name: 'Arunachal Pradesh' },
            { state_code: 'ML', state_name: 'Meghalaya' },
            { state_code: 'NL', state_name: 'Nagaland' },
            { state_code: 'LA', state_name: 'Ladakh' },
            { state_code: 'SK', state_name: 'Sikkim' },
            { state_code: 'AN', state_name: 'Andaman and Nicobar Islands' },
            { state_code: 'MZ', state_name: 'Mizoram' },
            { state_code: 'DN', state_name: 'Dadra and Nagar Haveli and Daman and Diu' },
            { state_code: 'UN', state_name: 'State Unassigned' },
            { state_code: 'LD', state_name: 'Lakshadweep' }
        ];
        this.setState({ state_meta: state_meta });
    }
    getDataFromAPI = () => {
        const api_url = "https://data.covid19india.org/v4/min/data.min.json";
        fetch(api_url, {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(data => {
            if (data.TT.total !== undefined) {
                this.setState({ india_data: data.TT.total });
            }
            let state_data = data;
            delete state_data.TT;
            if (state_data !== undefined) {
                this.setState({ statewise_data: state_data });
            }
            this.setState({ data_received: true });
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.setStateCodes();
        this.getDataFromAPI();
    }

    getCardDetails() {
        var cards = [];
        var state_list = Object.entries(this.state.statewise_data);
        let formated_data = [];
        state_list.forEach((item) => {
                let s_meta = this.state.state_meta.find(detail => {
                    return detail.state_code === item[0];
                })
                let f_data = {
                    state_code: item[0],
                    data: item[1],
                    state_name: s_meta.state_name
                }
                cards.push( < Card key = { f_data.state_code }
                    data = { f_data.data }
                    title = { f_data.state_name }
                    />);
                    formated_data.push(f_data);

                });
            return cards;
        }

        render() {
            let cards;
            if (this.state.data_received) {
                cards = this.getCardDetails();
            } else {
                cards = ( < LoadingScreen / > );
            }
            return ( <
                div className = "App" >
                <
                title > COVID - 19 React < /title> <
                header >
                <
                h1 > COVID 19 TRACKER - INDIA < /h1> <
                /header> { cards } <
                Footer > < /Footer> <
                /div>
            );
        }
    }

    export default App;