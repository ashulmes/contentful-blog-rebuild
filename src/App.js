import React from "react";
import "./App.css";
import { service } from "./service";
import Posts from "./components/posts";

class App extends React.Component {
  state = {
    entries: [],
  };

  componentDidMount() {
    service
      .getEntries({ content_type: "entries" })
      .then((response) => {
        this.setState({
          entries: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>It's all one great big movie...</h1>
            <h2>... only you can't pick your genre.</h2>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.entries} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
