import React from 'react'

const MovieList = ({ loading, error, movies }) => {
  if (error) {
    return <div>Algo de errado não está certo</div>
  }
  if (loading || movies === null) {
    return <div>Carregando...</div>
  }

  if (movies.length === 0) {
    return <div>Nenhum resultado encontrado</div>
  }

  return (
    <div className="movie-list">
      {movies.items.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  )
}

export default MovieList