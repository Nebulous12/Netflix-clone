import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
          <Main/>
          <Row RowID = '1' title = 'Upcoming' fetchUrl = {requests.requestUpcoming}  />
          <Row RowID = '2' title = 'Popular' fetchUrl = {requests.requestPopular}  />
          <Row RowID = '3' title = 'Trending' fetchUrl = {requests.requestTrending}  />
          <Row RowID = '4' title = 'Top Rated' fetchUrl = {requests.requestTopRated}  />
          <Row RowID = '5' title = 'Horror' fetchUrl = {requests.requestHorror}  />
    </>

  )
}

export default Home