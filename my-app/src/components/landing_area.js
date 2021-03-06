import React from 'react';

const LandingArea = ({ instructions, topScore, score }) => {
  return (
    <div>
      <nav className="navbar-heading">
        <ul>
          <li>
            <a href="/">NFL Clicky Game</a>
          </li>

          <li className="display-msg">{instructions}</li>

          <li>
            Score: {score} &lt;&gt; High Score: {topScore}
          </li>
        </ul>
      </nav>
      <div className="bg-img">
        <div className="img-mask">
          <div className="landing-content">
            <h1>NFL Clicky Game</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingArea;