import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/404.svg";
import BackArrow from "../assets/images/BackArrow.png";
import PageContainer from "../components/PageContainer";

function NotFoundPage() {
  return (
    <PageContainer>
      <div>
        <button type="button" className="flex items-center">
          <Link
            to="/"
            className="focus:outline-none flex items-center pl-6 pt-2"
          >
            <img src={BackArrow} alt="Back Arrow" className="w-4 h-4" />
            <p className="pl-1 text-xs">Back</p>
          </Link>
        </button>

        <div className="flex justify-center">
          <img
            src={NotFoundImage}
            className="h-88 w-auto m-8"
            alt="404 Not Found"
          />
        </div>
      </div>
    </PageContainer>
  );
}

export default NotFoundPage;
