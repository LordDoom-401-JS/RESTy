// import logo from './logo.svg';
import React from 'react.js';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import './App.scss';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],
    }
  }
  updateResults = (apiResults) => {
    let newCount = apiResults.length;
    let apiHeaders;
    let apiBody = apiResults;
    console.log('length of results ', newCount);
    this.setState({ headers: apiHeaders });
    this.setState({ results: apiBody });
    this.setState({ count: newCount});
  }
  render() {
    return (
      <>
        <Header />
        <Form 
          provideResults={this.updateResults}
        />
        <Results
        results={this.state.results}
        count={this.state.count}
        />
        <Footer />
      </>
    )
  }
}

export default App;
