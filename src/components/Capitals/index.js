import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({activeCountry: event.target.value})
  }

  getCountry = () => {
    const {activeCountry} = this.state
    const countryObj = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCountry,
    )
    return countryObj.country
  }

  render() {
    const {activeCountry} = this.state
    const country = this.getCountry()
    return (
      <div className="bg">
        <div className="card">
          <h1>Countries and Capitals</h1>
          <div className="options">
            <select value={activeCountry} onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is Capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
