import React, { useEffect } from "react";
import Typed from 'typed.js'; // Correct import statement for typed.js


export default function HomeContainer() {
  useEffect(() => {
    const typed = new Typed('#Elements', {
      strings: ['Notes', 'Summary', 'Question Solutions', 'Model Questions'],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const imageStyle = {
    height: "100%",
    width: "100%",
    backgroundImage: 'url("aGirl-Photoroom.png-Photoroom.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(12, 12, 12)",
    color: "white"
  };

  const element ={
    fontSize:"44px",
    color: "red"
  }

const pStyle={
 height:"auto",
 width:"90%",
    lineHeight: "1.5"
}

let boldColor ={
  color:"red",
  fontSize:"15px"
}

  return (
    <div className="HomeContainer">
      <div style={imageStyle} className="textAndImage">
        <div className="marqueeText">
          <h1 className="section-div-h3">Hello Students!! I am Glad You are Here,</h1>
          <h1 className="section-div-floattext">
            Here You Get Subjects <span style={element} id="Elements"></span>
          </h1>
          <p style={pStyle}>At our platform, we're dedicated to providing you with the most current and relevant information across various subjects Whether you're looking for detailed notes, concise summaries, or comprehensive solutions to questions, you've come to the right place.
          Our platform is carefully crafted to ensure a seamless and enriching digital learning experience.
          Here's what you can,<br />  
          <b style={boldColor} >Comprehensive Content:</b> Access detailed notes and comprehensive study materials covering a wide range of topics. <br />
          <b style={boldColor} >Concise Summaries:</b> Quickly grasp key concepts with our concise and effective summaries of complex subjects. <br />
          <b style={boldColor} >Interactive Learning:</b> Engage with interactive elements that enhance understanding and retention. <br />
          <b style={boldColor} >Guidance: </b> Benefit from expertly crafted solutions and explanations to your questions. <br />
          <b style={boldColor} >User-Friendly Interface:</b> Navigate through our platform effortlessly with a user-friendly interface designed for optimal learning. <br />
</p>
                <div className="socialicons">
                <a href="/"><img className="iconPngs" src="icons8-facebook-24.png" alt="FaceBook Icon"  /></a>
                <a href="/"><img className="iconPngs" src="icons8-insta-24.png" alt="Instagram Icon"  /></a>
                <a href="/"><img className="iconPngs" src="icons8-twitter-24.png" alt="X Icon" /></a>
                <a href="/"><img className="iconPngs" src="icons8-twitter-24.png" alt="/" /></a>
            </div>
        </div>
      </div>
    </div>



  );
}

