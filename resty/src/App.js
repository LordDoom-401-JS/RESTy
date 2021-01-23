// import logo from './logo.svg';
import React from 'react.js';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}


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

export default App;
