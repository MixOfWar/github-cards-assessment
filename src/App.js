import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false,
  }

  handleToggle = () => {
    this.setState((state) => ({active: !state.active}))
  }

  componentDidMount() {
    const githubURL = 'https://api.github.com/users/mrssilentwar';
    fetch(githubURL).then((data) => data.json()).then(result => {
      this.setState({user: result})
    })
  }

  render() {
    const {user, active} = this.state;
    return (
      <div className="App">
        <header>
          <Button variant="contained" color="secondary" onClick={this.handleToggle}>Click Me!</Button>
        </header>
        {active && 
          <a href={user.html_url}>
            <Card className='user_tile'>
              <img alt={user.login} src={user.avatar_url} />
            <p className="user_title">{user.login}</p>
            <p>{user.name}</p> 
            <p>{user.bio}</p>
          </Card>
          </a>
        }
      </div>
    )
  }
}

export default App;
