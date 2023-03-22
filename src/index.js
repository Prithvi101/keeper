import React from "react";
import App from "./components/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(  <StrictMode>
    <App></App></StrictMode>)
//1. Create a new React app.
//2. Create a App.jsx component. done
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. 
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

