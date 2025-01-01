import React from "react";
import { Link } from "react-router-dom";
import "../style/404page.css"
const Page404 = () => {
  return (
    <div className="page-404">
      <h1>Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className="back-to-home">Go to Home Page</Link>
    </div>
  )
};

export default Page404;
