import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoWall = (props) => {
    return(
        <div>
            <button className="addIcon">+</button>
            <div className='photogrid'>
            {props.posts.map((post,index)=>{
                return <Photo key={index} post={post} removePhoto={props.removePhoto}/>;
            })}
        </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    removePhoto: PropTypes.func.isRequired
}

export default PhotoWall;