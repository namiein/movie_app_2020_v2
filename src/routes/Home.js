import React from "react"; //this is required when creating a component
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// Home is a React Component
// React Component has "state"
// Do not have return method
// Instead can use "Render"
// React Component has Render and class Home extends Component so --> can use Render
// React automatically executes Render method of All Class Components!
class Home extends React.Component {
    //initial values
    // state == object
    // put data of component
    // data that change

    //never do this:
    // this.state.isLoading : false
    // do not mutate state directly
    state = {
        //when component mounts
        isLoading: true,
        movies: []
    };

    //비동기식 == 기다려야 한다 (await를 사용하려면 async를 사용해야함)
    getMovies = async () => {
        //await == 내가 어떤 작업을 기다려야 하는지 알려줌
        //movies.data.data.movies => const movies = await axios.get ...
        //await를 사용하면 자바스크립트한테 getMovies()는 시간이 필요하고 기다려야 한다고 말해주는 것

        //data -> data 안에있는 movies를 사용하겠다
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies);
        //{ movies: movies } == {movies}

        // using setState --> React knows the user wants to refresh the View --> so call Render function
        // change the state == refreshing the page being shown(updating the page)
        // important!! state is object!!!
        // {movies: movies} --> {movies}
        // 하나는 state : 다른 하나는 axios
        // 즉, state에 있는 movies에다가 axios로부터 받아온 data.data.movies를 넣는다
        this.setState({ movies, isLoading: false });
    };

    //Mounting에 해당됨
    //render()다음에 불려옴
    componentDidMount() {
        this.getMovies();
    }

    //Updating에 해당됨
    //componentDidUpdate()
    //render()다음에 불려짐

    render() {
        const { isLoading, movies } = this.state;
        //this.state.isLoading을 ES6버젼으로
        //== get isLoading from this.state
        return (
            <section className="container">
                {/* 
                    to show state in the render use {this.state.nameOfStateYouWantToShow} 
                    since {this.state.nameOfStateYouWantToShow} is long 
                    we use const {data that is inside the state} = this.state
                    const data = this.state.data
                */}
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {/* 
                            map 
                            - receives an array
                            - returns a new array using items from received array
                        */}
                        {movies.map(movie => {
                            return (
                                <Movie
                                    // passing information to the component
                                    // giving movie a prop(property) named id, year ... with value movie.id, movie.year
                                    // property named id that has value movie.id
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
