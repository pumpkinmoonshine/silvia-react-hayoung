import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { viewMovieList } from "../../store/modules/movie";
import { disableLoader, enableLoader } from "../../store/modules/loader";
import LoadingOverlay from "react-loading-overlay";

export default function Movies() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList);
  const { loading } = useSelector((state) => state.loader);

  useEffect(() => {
    if (Object.keys(movieList).length === 0) {
      dispatch(enableLoader());
      dispatch(viewMovieList()).then(() => dispatch(disableLoader()));
    }
  }, [dispatch, movieList]);

  return (
    <>
      <LoadingOverlay
        active={loading}
        spinner
        text="Loading..."
        styles={{
          wrapper: {
            margin: "0 auto",
          },
        }}
      >
        {movieList.data &&
          movieList.data.movies.map((data, index) => {
            return <List key={index}>{data.title}</List>;
          })}
      </LoadingOverlay>
    </>
  );
}

const List = styled.p`
  margin-bottom: 8px;
  text-align: center;
`;
