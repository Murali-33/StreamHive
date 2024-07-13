import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Displaying popular movies: When you visit the home page, the app
          initiates a request to the TMDB API to retrieve a list of popular
          movies. This API call fetches detailed information about the trending
          films, including titles, overviews, release dates, and poster images.
          Once the response is received, the app processes the data and
          dynamically updates the home page to display the movie titles,
          overviews, release dates, and accompanying posters. This provides
          users with a visually engaging and informative overview of the current
          popular movies, allowing them to discover new films at a glance.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              data-testid="social-github"
              href="https://github.com/Murali-33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://github.com/Murali-33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              data-testid="social-linkedin"
              href="https://www.linkedin.com/in/murali3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              data-testid="social-linkedin"
              href="https://www.linkedin.com/in/murali3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
