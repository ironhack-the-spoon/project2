import { Link } from "react-router-dom";
import TheSpoonLight from "../images/the-spoon-light.png";
import AndroidAppLogo from "../images/Android.png";
import AppleAppLogo from "../images/Apple.png";
import GitHubLogo from "../images/githubLogo.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#06402b" }} className="w-full m-0 p-0">
      <div className="w-full pt-4 md:py-8 pl-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Container for logo and tagline */}
          <div className="flex items-center">
            <a href="https://the-spoon.netlify.app/">
              <img src={TheSpoonLight} className="h-16 w-auto mt-0" alt="The Spoon Logo" />
            </a>
            <p className="text-white text-xs italic mt-5 ml-1">Every scoop is better with a spoon.</p>
          </div>

          <ul className="flex flex-wrap items-center mb-1 text-xs font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Terms of Use</Link>
            </li>
          </ul>
        </div>

        <hr className="border-0 lg:my-4 w-full text-start" />

        <div className="flex items-center justify-between mt-4 pl-4">
          <span className="text-white text-xs dark:text-gray-400">
            © 2024 <a href="https://the-spoon.netlify.app/" className="hover:underline">The Spoon</a>. All Rights Reserved.
          </span>

          <div className="flex space-x-4 pr-4">
            <a href="https://github.com/ironhack-the-spoon/project2" target="_blank" rel="noopener noreferrer">
              <img src={GitHubLogo} alt="GitHub Logo" className="h-7 w-auto pr-3" />
            </a>
            <img src={AndroidAppLogo} alt="Android App" className="h-7 w-auto" />
            <img src={AppleAppLogo} alt="Apple App" className="h-8 w-auto" />

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;