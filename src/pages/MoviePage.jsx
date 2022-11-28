import React from 'react';
import useFetch from '../custom-hooks/useFetch';
import { useEffect } from 'react';
import MoviePageDetails from '../components/MoviePageDetails/MoviePageDetails';
import { useParams } from 'react-router-dom';
import styles from '../pages/MoviePage.module.css';

const MoviePage = () => {
  const { request, dataFetch, loading } = useFetch();
  const { id } = useParams();
  if (id)
    useEffect(() => {
      request(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR`
      );
    }, []);

  return (
    <section
      className={`${styles.background} flex w-100% h-screen items-center justify-center bg-gray-900 px-5`}
    >
      {/* <div className='text-white text-4xl'>Carregando...</di   */}
      {!loading ? (
        <MoviePageDetails dataFetch={dataFetch} />
      ) : (
        <div className='text-white text-4xl'>Carregando...</div>
      )}
    </section>
  );
};

export default MoviePage;
