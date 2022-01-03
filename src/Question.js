import React from "react";
import "./Question.css";
import Button from "@mui/material/Button";

function Question() {
  return (
    <div className="question">
      <section class="question__hero">
        <div class="question__content">
          <h1 class="question__title">
            Questions <br />
            about <br />
            hosting?
          </h1>
          <Button variant="contained" size="medium">
            Ask a Superhost
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Question;
