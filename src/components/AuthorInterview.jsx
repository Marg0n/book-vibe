
import { PropTypes } from 'prop-types';

const AuthorInterview = ({interviews}) => {

    const { author, interview, bookName} = interviews;
    console.log(interview)

    return (
        <div className="p-6 overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800 border shadow-xl">
            <article>
                <h2 className="text-xl font-bold">{bookName}</h2>
                <p className="mt-4 dark:text-gray-600">
                    {interview}
                </p>
                <div className="flex items-center mt-8 space-x-4">
                    <div>
                        <h3 className="text-sm font-medium">{author}</h3>
                    </div>
                </div>
            </article>
        </div>
    );
};

AuthorInterview.propTypes = {
    interviews: PropTypes.object,
}

export default AuthorInterview;