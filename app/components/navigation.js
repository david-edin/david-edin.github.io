// Client-Side Rendering, which enables the use of client-side JavaScript capabilities (for example document,getElement doesn't work without it)
"use client";

import React, { useEffect } from "react";
import Link from 'next/link';

import "./navigation.css";

const Navigation = () => {
  useEffect(() => {
    // Find the navigation elements
    const link = document.querySelectorAll(".navigation-link");
    const url = window.location.href;

    const home = document.getElementById("0");
    const images = document.getElementById("1");

    // Functions to set the .active-link class
    function noActive() {
      link[0].className = "navigation-link active-link";
      link[1].className = "navigation-link";
    }
    
    function setImagesAsActive() {
      link[1].className = "navigation-link-alt active-link";
      link[0].className = "navigation-link-alt";
    }

    // Function to check which link is active on load
    if (url.includes("/images")) {
      setImagesAsActive();
    } else {
      noActive();
    }

    //  If a navigation link is clicked it adds the .active-link class
    home.addEventListener("click", () => {
      noActive();
    });
    
    images.addEventListener("click", () => {
      setImagesAsActive();
    });
  }, []);

  return (
    // Create navigation with the navigation links having a numbered id so it's able to be accessed by the code above easier
    <div className="navigation-wrapper">
      <nav className="navigation">
        <Link
          id="0"
          className={
            "navigation-link"
          }
          href="/">
          Idea
        </Link>

        <Link
          id="1"
          className={"navigation-link"}
          href="images">
          Images
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;