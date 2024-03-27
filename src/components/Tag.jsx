
import { PropTypes } from 'prop-types';

const Tag = ({ tag }) => {
    return (
        <>
            <i className='bg-green-50 rounded-2xl py-1 px-2 mr-4 text-green-600'>#{tag}</i>
        </>
    );
};

Tag.propTypes = {
    tag: PropTypes.string,
}

export default Tag;