import React from "react";
import "./About.css";

// Prop(full name.Property) is the way to give information to the component,
// which is the shape of the 'Attribute'(< ~="~">).
// These 'attribute' goes to the component(=function)'s argument as 'props',
// but you can use curly bracket( { } ) to get props from inside of props.

// receiving the property
// About component has props
function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                “Freedom is the freedom to say that two plus two make four. If
                that is granted, all else follows.”
            </span>
            <span>− George Orwell, 1984</span>
        </div>
    );
}

export default About;
