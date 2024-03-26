import { Link } from "react-router-dom";
import book from "../assets/images/book1.png"

const Hero = () => {
  return (
    <div className="hero min-h-96 bg-base-200 container mx-auto rounded-xl py-12 lg:px-28">
      <div className="hero-content flex-col lg:flex-row-reverse gap-14">
        <img
          src={book}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-8 px-6">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <Link to='/listedbook' className="btn bg-green-500 text-white hover:btn-accent">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
