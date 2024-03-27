
import AuthorInterview from '../components/AuthorInterview';
import { useLoaderData } from 'react-router-dom';

const Interview = () => {

const interviewsOfAuthor = useLoaderData();
console.log(interviewsOfAuthor)

// const {id, author, interview} = interviews;

    return (

        <div className='container mx-auto '>
            
            <h2 className='text-2xl font-semibold text-center my-8'>
                What does the Authors think about their creation?
                </h2>

            <div className='grid grid-cols-2 gap-4'>
        {
            interviewsOfAuthor?.map((interviews, idx) => (
                <AuthorInterview key={idx} interviews={interviews}/>
            ))
        }
            
        </div>
        </div>
    );
};

export default Interview;