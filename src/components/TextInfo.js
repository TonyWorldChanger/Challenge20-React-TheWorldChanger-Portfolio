import React from "react";
import TypeWriter from "typewriter-effect";


function TextInfo() {
    return (
        <TypeWriter options={{
            strings: [
                "Hello, my name is Tony Steverson, Jr.",
                "I hope to change the world",
                "Here's a little about me"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 60
        }}
        >
        </TypeWriter>
    );
}

export default TextInfo;
