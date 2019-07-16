import React from "react"; //typing in react code (import same as require, es6 javascripts)
import ReactDOM from "react-dom"; // u will only import this here
import "./index.css"; //
import App from "./App";
import * as serviceWorker from "./serviceWorker"; // iT is an introduction to react 16.86..this is there because it allows u to catching app requests, for you, for faster results

ReactDOM.render(<App />, document.getElementById("root"));
//NOTES:
// document get element ID is getting the root, by going through the DOM.
//Means there is a div with an ID of root that is empty
//how is it rendering, if the div is empty?
//The line is resposible for taking our react code and popping it in root div.
// Everything will be compiled in the root id.
// There is a parent component that houses all other componenets in it.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// NOTES:
//exporting: export (someVar);
// importing: import react from "react";
// named export: (want piece of code exported): export const someVar = 1; or export {someVar};
// default export: there can only be one default export, but multiple named exports...It's a piece of code, that would be recognized anywhere, as the default export
// Example: export default anotherVar; ...importing default export does not need to be wrapped in {} when importing
// example: import anotherVar from './a' ... the default export can be named whatever only when IMPORTING IT
//example: import {someVar} from './a'  ...  <---(thats a file)
