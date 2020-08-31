import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
//if not need state -> no need to be class component
import { Link } from "react-router-dom";

// props.id, props.year, props.title, props.summary, props.poster, props.genres
function Movie({ id, year, title, summary, poster, genres }) {
    return (
        // sending data to Detail page
        // using to = {{}}
        <Link
            to={{
                // ` `를 써서 variable을 추가해야함
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}</p>
                </div>
            </div>
        </Link>
    );
}

// npm install prop-types
// to check whether the props I am receiving are props that I actually wanted
// import PropTypes from "prop-types";

// expectation for props
// types for props
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;
