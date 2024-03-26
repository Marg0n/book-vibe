import BooksList from "../components/BooksList";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const books = useLoaderData();
    // console.log(books);

    return (
        <div className="">
            <Hero />
            <BooksList books={books} />
        </div>
    );
};

export default Home;