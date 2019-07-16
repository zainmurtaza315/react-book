import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Raptors} from "./Raptors"
// NOTES:
// JSX RULES:
// This is called JSX. Looks like html, but it isnt html. (BELOW)
// When it comes to a componenet, the signature for it is:
// function decloration, like the one below .
// Every single componenet must return , one parent element.
// meaning, everything is parent in one div. This can be a div or a span, or etc. U cannot have multiple components or div's
// You can export this app by: named export...
// Import react whenever using REACT (JSX)
// CSS:
// import css: import './a.css' .....<--- (file name)
// You can have the Class names for multiple files, REACT DOES NOT CONFUSE THIS.
// Import componenet into parent component: export {Raptors}; ... import in app.js: import {Raptors};
// Then you would type your file name like an html tag...into the code below: <Raptors/>....
// BOOTSTRAP:
//Concepts of CDNs, such as bootstrap, we would do:
// go into the index.html, in the header. Just the same as usual
// then go into your file.js...app.js and then follow the steps above, and insert the bootstrap code, and change
// the class into classname, thats all!
// JAVASCRIPT:
// What if you want to incorporate JavaScript into this?
// yess you can! ... you can have an expression, something that equates to one value
const myName = "zain";
// you must use curly braces to incorporate this into the code...such as {myName} on line 33, to incorporate
// the expression on line 23.
// as long as the code returns a value, it will work (expression)
 // IN LINE STYLES CSS:
    const styles = {
      color: "red", fontSize: "5rem", backgroundColor: "white" }
     // Call it in the component like this now: {styles}
      
function App() {
  // App/function name must always be capital
  return (
      // class name is class...class is taken as a protected keyword
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "red", fontSize: "5rem", backgroundColor: "white" }}>
          Edit <code>src/App.js</code> and save to reload. {myName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
        <p>
          {" "}
          <Raptors />{" "}
        </p>
        <p>  <Raptors {firstName: "zain"} {lastName: "Murtaza"}> </p>
      </header>
    </div>
  );
}
// The above is a Functional/presentational component. - "dumb" component. There is no logic in this componenet.
// It is just showing us the UI.
// IN LINE CSS STYLING:
// In-line styling..takes object syntax.. one curly brace, is javascript expression, 2 curly braces javascript object.
// when using a css property, anything with a "-" it changes from background-color, it is now "backgroundColor".
// Font-size = fontSize. See line 45.
// you can also have a object outside the function and call the object...line 37.
// PROPS: 
// you can add props to your file name that you have imported, in this case, Raptors. line 3s1.
// after this you must go to you Raptors file that you had created, and add the word "props" in the functional component that you created
// After this is done, you must add props.firstName and props.lastName to make the necessairy changes for REACT to excute your changes. 
//

export default App;
