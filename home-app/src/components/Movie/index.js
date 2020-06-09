import React, { useState, useEffect } from 'react'

import useApi from '../../utils/useApi'
import MovieList from './List'

const Movie = () => {
  const [load, loadInfo] = useApi({
    url: 'https://api.themoviedb.org/3/list/1',
    method: 'get',
    params: {
      api_key: 'e2c70d159f475c3cf6bd625fd21f2312',
      language: 'en-US',
    },
  })

  useEffect(() => {
    load()
  }, [])

  console.log(loadInfo.data)

  return (
    <div className="movie">
      <h1>Movie</h1>
      <MovieList
        movies={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
    </div>
  )
}

export default Movie