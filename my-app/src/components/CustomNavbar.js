import React from "react";
import './CustomNavbar.css'

function CustomNavbar() {
  return (
    <div class="container">
      <div class="navbarcontainer">
       <div class="child1">
       <div className="leetcode"> Leetcode</div>
       <div className="explore">Explore</div>
       <div className="problems">Problems</div>
       <div className="interview">Interview</div>
      </div>
      <div class="child2">
        <button className="premium">Premium</button>
        <button className="login">Log In</button>
      </div>
    </div>
    
    </div>


  );
}

export default CustomNavbar;