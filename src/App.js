import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/footer/Footer";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import SideBar from "./components/sidebar/SideBar";
// import CardButton from './components/CardButton';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statewise_data: {},
      india_data: {},
      data_received: false,
      state_meta: {},
      selection: [],
    };
  }

  setStateCodes = () => {
    let state_meta = [
      { state_code: "TT", state_name: "Total" },
      { state_code: "MH", state_name: "Maharashtra" },
      { state_code: "KA", state_name: "Karnataka" },
      { state_code: "AP", state_name: "Andhra Pradesh" },
      { state_code: "TN", state_name: "Tamil Nadu" },
      { state_code: "KL", state_name: "Kerala" },
      { state_code: "DL", state_name: "Delhi" },
      { state_code: "UP", state_name: "Uttar Pradesh" },
      { state_code: "WB", state_name: "West Bengal" },
      { state_code: "OR", state_name: "Odisha" },
      { state_code: "RJ", state_name: "Rajasthan" },
      { state_code: "TG", state_name: "Telangana" },
      { state_code: "CT", state_name: "Chhattisgarh" },
      { state_code: "HR", state_name: "Haryana" },
      { state_code: "BR", state_name: "Bihar" },
      { state_code: "GJ", state_name: "Gujarat" },
      { state_code: "MP", state_name: "Madhya Pradesh" },
      { state_code: "AS", state_name: "Assam" },
      { state_code: "PB", state_name: "Punjab" },
      { state_code: "JK", state_name: "Jammu and Kashmir" },
      { state_code: "JH", state_name: "Jharkhand" },
      { state_code: "UT", state_name: "Uttarakhand" },
      { state_code: "HP", state_name: "Himachal Pradesh" },
      { state_code: "GA", state_name: "Goa" },
      { state_code: "PY", state_name: "Puducherry" },
      { state_code: "TR", state_name: "Tripura" },
      { state_code: "MN", state_name: "Manipur" },
      { state_code: "CH", state_name: "Chandigarh" },
      { state_code: "AR", state_name: "Arunachal Pradesh" },
      { state_code: "ML", state_name: "Meghalaya" },
      { state_code: "NL", state_name: "Nagaland" },
      { state_code: "LA", state_name: "Ladakh" },
      { state_code: "SK", state_name: "Sikkim" },
      { state_code: "AN", state_name: "Andaman and Nicobar Islands" },
      { state_code: "MZ", state_name: "Mizoram" },
      {
        state_code: "DN",
        state_name: "Dadra and Nagar Haveli and Daman and Diu",
      },
      { state_code: "UN", state_name: "State Unassigned" },
      { state_code: "LD", state_name: "Lakshadweep" },
    ];
    this.setState({ state_meta: state_meta });
  };
  getDataFromAPI = () => {
    const api_url = "https://data.covid19india.org/v4/min/data.min.json";
    fetch(api_url, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.TT.total !== undefined) {
          this.setState({ india_data: data.TT.total });
        }
        let state_data = data;
        delete state_data.TT;
        if (state_data !== undefined) {
          this.setState({ statewise_data: state_data });
        }
        this.setState({ data_received: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.setStateCodes();
    this.getDataFromAPI();
  }

  getCardDetails() {
    var cards = [];
    var state_list = Object.entries(this.state.statewise_data);
    let formated_data = [];
    state_list.forEach((item) => {
      let s_meta = this.state.state_meta.find((detail) => {
        return detail.state_code === item[0];
      });
      let f_data = {
        state_code: item[0],
        data: item[1],
        state_name: s_meta.state_name,
      };
      cards.push(
        <Card
          key={f_data.state_code}
          data={f_data.data}
          title={f_data.state_name}
        />
      );
      formated_data.push(f_data);
    });
    return cards;
  }

  addToSelection(selected_state) {
    let selectedStates = this.state.selection;
    const index = selectedStates.indexOf(selected_state);
    if (index > -1) {
      selectedStates.splice(index, 1);
    } else {
      selectedStates.push(selected_state);
    }
    this.setState({ selection: selectedStates });
    console.log(selectedStates);
  }
  render() {
    let cards;
    if (this.state.data_received) {
      cards = this.getCardDetails();
    } else {
      cards = <LoadingScreen />;
    }
    return (
      <div className="App">
        <title> COVID - 19 React </title>{" "}
        <header>
          <h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                width="24px"
                viewBox="0 0 48 48"
              >
                <defs></defs>
                <path
                  className="a"
                  style={{
                    fill: "rgb(0 68 153)",
                    width: "24px",
                    height: "24px",
                  }}
                  d="M46.5,19A1.49977,1.49977,0,0,0,45,20.5V22H40.87225a16.9,16.9,0,0,0-3.53-8.51367l2.92121-2.92139,1.17582.99561a1.49993,1.49993,0,1,0,2.12134-2.1211l-4.99991-5a1.4999,1.4999,0,0,0-2.12127,2.1211l.99565,1.17578-2.92139,2.92138A16.90205,16.90205,0,0,0,26,7.12793V3h1.5a1.5,1.5,0,0,0,0-3h-7a1.5,1.5,0,0,0,0,3H22V7.12793a16.90205,16.90205,0,0,0-8.51367,3.52978L10.56494,7.73633l.99565-1.17578a1.4999,1.4999,0,0,0-2.12127-2.1211l-4.88475,5a1.49993,1.49993,0,0,0,2.12133,2.1211l1.06067-.99561,2.92121,2.92139A16.9,16.9,0,0,0,7.12775,22H3V20.5a1.5,1.5,0,0,0-3,0v7a1.5,1.5,0,0,0,3,0V26H7.12775a16.9,16.9,0,0,0,3.53,8.51367L7.73657,37.43506l-1.17582-.99561a1.49993,1.49993,0,0,0-2.12134,2.1211l4.99991,5a1.4999,1.4999,0,1,0,2.12127-2.1211l-.99565-1.17578,2.92127-2.92138A16.902,16.902,0,0,0,22,40.87207V45H20.5a1.5,1.5,0,0,0,0,3h7a1.5,1.5,0,0,0,0-3H26V40.87207a16.902,16.902,0,0,0,8.51379-3.52978l2.92127,2.92138-.99565,1.17578a1.4999,1.4999,0,0,0,2.12127,2.1211l4.99991-5a1.49993,1.49993,0,1,0-2.12134-2.1211l-1.17582.99561-2.92121-2.92139A16.9,16.9,0,0,0,40.87225,26H45v1.5a1.5,1.5,0,0,0,3,0v-7A1.49977,1.49977,0,0,0,46.5,19Zm-28,1A3.5,3.5,0,1,1,22,16.5,3.49994,3.49994,0,0,1,18.5,20ZM30,33a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,30,33Z"
                />
              </svg>
              &nbsp;COVID19
            </span>{" "}
            TRACKER - INDIA{" "}
          </h1>{" "}
        </header>
        <SideBar
          states={this.state.state_meta}
          onselect={(item) => this.addToSelection(item)}
        ></SideBar>{" "}
        <div className="card-container">{cards}</div>
        <Footer> </Footer>{" "}
      </div>
    );
  }
}

export default App;
