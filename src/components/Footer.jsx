import { Link } from "react-router-dom";
import TheSpoonLight from "../assets/images/Logo-the-spoon-light.png";
import AndroidAppLogo from "../assets/images/Logo-Android.png";
import AppleAppLogo from "../assets/images/Logo-Apple.png";
import GitHubLogo from "../assets/images/Logo-Github.png";
import PageContainer from "../components/PageContainer";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#06402b" }} className="w-full m-0 p-0">
      <PageContainer>
        <div className="w-full pt-4 md:py-8 pl-6">
          <div className="sm:flex sm:items-center sm:justify-between flex-wrap">
            <div className="flex items-center flex-wrap">
              <a href="/">
                <img
                  src={TheSpoonLight}
                  className="h-16 w-auto mt-0"
                  alt="The Spoon Logo"
                />
              </a>
              <p className="text-white text-xs italic mt-5 ml-1 sm:mt-0 pt-5">
                Every scoop is better with a spoon.
              </p>
            </div>

            <ul className="flex flex-wrap items-center mb-1 text-xs font-medium pr-6 text-white sm:mb-0 sm:space-x-6">
              <li>
                <Link to="/about" className="hover:underline p-1">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <hr className="border-0 lg:my-4 w-full text-start" />

          <div className="flex flex-col md:flex-row items-center justify-between mt-4 pl-4">
            <span className="text-white text-xs text-center md:text-left">
              © 2024{" "}
              <a href="/" className="hover:underline">
                The Spoon
              </a>
              . All Rights Reserved.
            </span>

            <div className="flex space-x-4 mt-4 md:mt-0 pr-4 justify-center md:justify-end">
              <a
                href="https://github.com/ironhack-the-spoon/project2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubLogo}
                  alt="GitHub Logo"
                  className="h-7 w-auto"
                />
              </a>
              <img
                src={AndroidAppLogo}
                alt="Android App"
                className="h-7 w-auto"
              />
              <img src={AppleAppLogo} alt="Apple App" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
