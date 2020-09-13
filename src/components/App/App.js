import React from "react";
import "./App.css";
import Row from '../Row/Row';
import requests from '../../Utils/request';
import Banner from '../Banner/Banner';
import Nav from '../Nav/nav';


function App() {
  return (
    <>
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />


    </div>
    </>
  );
}

export default App;
