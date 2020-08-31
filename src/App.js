import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

//App == function that returns HTML
//to be a component
//1. import React from "react";
//2. export default ComponentName;

function App() {
    return (
        // fragment
        // html이 올바르게 작동되도록 도와줌?
        // https://reactjs.org/docs/fragments.html#:~:text=Fragments.%20A%20common%20pattern%20in%20React%20is%20for,also%20a%20new%20short%20syntax%20for%20declaring%20them.
        // <>
        <HashRouter>
            {/* Route는 /, /about을 모두 동일하게 처리 --> 왜냐하면 /로 시작하니까 */}
            {/* 따라서 exact = {true}를 적어야 /로 시작하는 서로 다른 주소들을 구분 */}
            <Navigation /> {/* 컴포넌트 */}
            {/* Route has 2 props :
            the screen it will render
            the url  */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            {/* Detail is a component on Route
            therefore can use props --> location, history etc.
            Navigation cannot use it! for example */}
            {/* here :id is a variable */}
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
        //     <footer></footer>
        // </>
    );
}

export default App;
