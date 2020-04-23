import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderDay from "./Components/HeaderDay";
import ApptList from "./Components/ApptList";

class App extends React.Component {
  state = [
    { "30/04/2020": "dentist 9am" },
    { "30/04/2020": "lunch 12pm" },
    { "30/04/2020": "cinema 7pm" },
    { "01/05/2020": "work 9am" },
    { "01/05/2020": "hairdresser 5pm" },
  ];

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
          <HeaderDay />
          <ApptList appts={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
