import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
    const post = props.post;
        return(
            <figure className='figure'>
                <img className='photo' src={post.link} alt="car collection"/>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick={()=>{props.removePhoto(post.id)}} className="remove-button">Remove</button>
                </div>
            </figure>
        )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    removePhoto: PropTypes.func.isRequired
}

export default Photo;