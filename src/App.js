import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lahbib:{
        fullName: 'haboub',
        bio: 'sa7bi haboub makifou hade tak tak',
        imgSrc: 'https://repertoire-artistestunisiens.com/wp-content/uploads/2016/08/he%CC%81di-habouba-300x215.jpg',
        profession: 'Developer fi bleda '
      },
      nosnos:{
        fullName: 'dali flowers',
        bio: 'sa7bi dali makifou hade tak tak',
        imgSrc: 'data:image/jpeg;base64,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',
        profession: 'Developer fi bleda '
      },
      person: {
        fullName: 'Mahmoud Zaouchi',
        bio: 'sa7bi mahmoud makifou hade tak tak',
        imgSrc: 'https://gomycodelearndev.blob.core.windows.net/profiles/753d7d3e-2d88-4147-adae-f219a9d3616f-133443409863260328.jpg',
        profession: 'Developer'
      },
      show: false,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  enzel = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person,nosnos,lahbib, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.enzel}>enzel lena ya hbib</button>
        {show && (
          <div className='mahmoud'>
            <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
          <div>
            <h2>{nosnos.fullName}</h2>
            <p>{nosnos.bio}</p>
            <img src={nosnos.imgSrc} alt="Profile" />
            <p>telmidh: {nosnos.profession}</p>
          </div>
            
          <div>
            <h2>{lahbib.fullName}</h2>
            <p>{lahbib.bio}</p>
            <img src={lahbib.imgSrc} alt="Profile" />
            <p>telmidh: {lahbib.profession}</p>
          </div>
          </div>
        )}
        <p>yezik matfareget okhrej: {timeSinceMount} seconds</p>
      </div>
    );
  }
}


export default App;