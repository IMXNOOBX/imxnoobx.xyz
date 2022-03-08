import React from "react";
import { Link } from "react-router-dom";
import style from "./404.module.css";


function NotFoundError() {
  return (
    <div className={style.main}>
      <h1 className={style.h1l}>404</h1>
      <h2 className={style.h1l}>Lost in the infinite space</h2>
      <Link className={style.btn} to="/">
        Return to the main page
      </Link>
    </div>
  );
}

export default NotFoundError;
