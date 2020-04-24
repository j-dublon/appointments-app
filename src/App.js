import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderView from "./Components/HeaderView";
import ApptList from "./Components/ApptList";
import AddAppt from "./Components/AddAppt";

class App extends React.Component {
  state = {
    appts: [
      { date: "2020-04-30", time: "09:00", description: "dentist" },
      { date: "2020-04-30", time: "12:00", description: "lunch" },
      { date: "2020-04-30", time: "19:00", description: "cinema" },
      { date: "2020-05-01", time: "09:00", description: "work" },
      { date: "2020-05-01", time: "17:00", description: "hairdresser" },
    ],
  };

  handleAddClick = (event) => {
    event.preventDefault();
    console.log("clicked!");
  };

  handleViewClick = () => {
    console.log("look!");
  };

  render() {
    return (
      <div className="App">
        <AddAppt handleAddClick={this.handleAddClick} />
        <Header />
        <form>
          <label>
            Date:
            <input type="date" />
          </label>
          <label>
            Time:
            <input type="time" />
          </label>
          <label>
            Info:
            <input type="text" />
          </label>
          <button onClick={this.handleAddClick}>Add</button>
        </form>
        <form>
          <label>
            See appointments for:
            <input type="date" onChange={this.handleViewClick} />
          </label>
        </form>
        <main>
          <HeaderView />
          <ApptList appts={this.state.appts} />
        </main>
      </div>
    );
  }
}

export default App;
