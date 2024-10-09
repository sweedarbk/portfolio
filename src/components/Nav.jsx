import React from "react";

const Nav = () => {
  const content = (
    <>
      <div className="">
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="About">
            <li>About</li>
          </Link>
          <Link to="Skills">
            <li>Skills</li>
          </Link>
          <Link to="Projects">
            <li>Projects</li>
          </Link>
          <Link to="Connect">
            <li>Connect</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
