import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      routeType: 'No route type selected',
      url: 'No URL provided'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let radioSelection = e.target.routeType.value;
    this.setState({ routeType: radioSelection });

    let urlInput = e.target.url.value;
    this.setState({ url: urlInput });

    this.setState({ display: true });

    this.getResults(radioSelection, urlInput);
  }

  getResults = async (method='GET', url) => {
    const apiRes = await fetch(url, { method: `${method}`, mode: 'cors'})
    .then(response => {
      if(response.status !==200)return;
      return response.json();
    });
    console.log ('apiRes.results', apiRes.results);
    this.props.provideRes(apiRes.results);
  }
 
  render(){
    return(
      <>
        <form>
          <fieldset>

            <label>
              <input id="getRadio" type="radio" name="routeType" value="GET" onChange={this.handleRadio}/>
              GET
            </label>

            <label>
              <input id="postRadio" type="radio" name="routeType" value="POST" onChange={this.handleRadio}/>
              POST
            </label>

            <label>
              <input id="putRadio" type="radio" name="routeType" value="PUT" onChange={this.handleRadio}/>
              PUT
            </label>

            <label>
              <input id="deleteRadio" type="radio" name="routeType" value="DELETE" onChange={this.handleRadio}/>
              DELETE
            </label>

            <section id="buttonSection"> 

              <label>
                URL: 
                <input id="urlInput" type='text' name="url" onChange={this.handleInput}/>
              </label>

              <button type="submit" onClick={this.handleSubmit}>Do The Things.</button>

            </section>

          </fieldset>
        </form>
        {!this.state.display ? '' : 
        <div>
          <section id="outputSection">{this.state.routeType}: {this.state.url}</section>
        </div>
        } 
      </>
    );
  }
};

export default Form;