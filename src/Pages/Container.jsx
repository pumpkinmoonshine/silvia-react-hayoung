import React from "react";
import Form from "./Components/Form";
import Movies from "./Components/Movies";
import Todos from "./Components/Todos";

export default function Container() {
  return (
    <section>
      <Form
        props={
          window.location.pathname.includes("/movies") ? movieProps : todoProps
        }
      >
        {window.location.pathname.includes("/movies") ? <Movies /> : <Todos />}
      </Form>
    </section>
  );
}

const todoProps = {
  title: "Todos",
};

const movieProps = {
  title: "Movies",
};
