import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderView from "./Components/HeaderView";
import ApptList from "./Components/ApptList";
import AddAppt from "./Components/AddAppt";

class App extends React.Component {
  state = {
    appts: {
      "2020-04-30": { time: "09:00", description: "dentist" },
      "2020-05-01": { time: "09:00", description: "work" },
    },
    selectedDate: "",
  };

  handleAddClick = (event) => {
    event.preventDefault();
  };

  handleViewClick = (event) => {
    const { value } = event.target;
    this.setState((currentState) => {
      return {
        ...currentState.appts,
        selectedDate: value,
      };
    });
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
          <ApptList
            appts={this.state.appts}
            selectedDate={this.state.selectedDate}
          />
        </main>
      </div>
    );
  }
}

export default App;
