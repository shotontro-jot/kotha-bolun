import React from "react";
import MyNav from "./components/navbar";
import MyTable from "./components/table";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MyNav />

      <MyTable />
      <div className="full-width">
        <div className="float-bottom">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScIJDumfCtb78rjMhbd9O7IhPn28waOu2vUK-W68NqrS0IXdg/viewform?fbclid=IwAR1HQqiihmwxCukGn1V5KsRwpPiUHZWMUwODX45qDgpamKV7f60wy_uKKuc"
          >
            আপনার সাথে ঘটে যাওয়া নির্যাতনের ঘটনা জানাতে পারেন এই লিঙ্কে
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
