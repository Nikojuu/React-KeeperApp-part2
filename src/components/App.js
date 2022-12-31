import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((info) => {
        return (
          <Note key={info.key} title={info.title} content={info.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
