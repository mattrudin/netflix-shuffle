import React from 'react'
import Head from '../components/head'
import SearchBar from '../components/searchBar'
import { getGenreTags, getGenreIDs } from '../utilities/utilities'
import unirest from 'unirest'
import { key } from '../.env_key'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genreTags: [],
      genreIDs: []
    }
  }

  componentDidMount() {
    unirest.get("https://unogs-unogs-v1.p.mashape.com/api.cgi?t=genres")
      .header("X-Mashape-Key", key)
      .header("Accept", "application/json")
      .end((response) => {this.setState({
        genreTags: getGenreTags(response.body["ITEMS"]),
        genreIDs: getGenreIDs(response.body["ITEMS"])
      })});
  }

  handleGenreChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    return(
      <div className="app">
      <Head title="Netflix Shuffle" />
        <SearchBar />
        <button onClick={()=> console.log(this.state.genreTags)}>GenreTags</button>
        <button onClick={()=> console.log(this.state.genreIDs)}>GenreIDs</button>
        <style jsx global>{`
          body {
            margin: 0;
          }
          .app {
            width: 100%;
            height: 100vh;
            background: black;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Roboto;
          }
          .row {
            width: 600px;
            height: 100px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            color: white;
            background: #252525;
          }
    
          .button {
            border: 0px;
            border-radius: 2px;
            margin-top: 20px;
            width: 200px;
            height: 30px;
            background: #e50914;
            color: white;
            text-transform: uppercase;
          }
          label {
            width: 50px;
          }
          Select {
            width: 100px;
          }
        `}</style>
      </div>
    )
  }
} 


export default Home
