import React from 'react'
import { Link} from 'react-router-dom';
import style from './css/404.css'




async function update(e) {
  try{
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  }
  catch (e) {
   return;
  }
}

function NotFoundError() {
  document.body.addEventListener('mousemove', update)
  document.body.addEventListener('touchmove', update)
  return (
    <div style={style}>
          <h1>404</h1>
          <h2>Lost in the infinite space</h2>
          <Link id="test" to="/">Return to the main page</Link>
    </div>
  );
}

export default NotFoundError;