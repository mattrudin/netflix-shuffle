import React from 'react'
import Select from 'react-select'
import Head from '../components/head'

const Home = () => (
  <div className="app">
  <Head title="Netflix Shuffle" />
    <div className="row">
      <label>Genre</label>
      <Select />
      <label>Duration</label>
      <Select />
      <label>Rating</label>
      <Select />
    </div>
    <button className="button">Show me something!</button>
    

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
      }
      .row {
        max-width: 880px;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        color: white;
        background: #252525;
      }

      .button {
        width: 100px;
        color: white;
        background: red;
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

export default Home
