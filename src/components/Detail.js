import React from "react";

class Detail extends React.Component {
    // how to create redirect
    // how to change navigation behavior of users
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);

        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
export default Detail;
