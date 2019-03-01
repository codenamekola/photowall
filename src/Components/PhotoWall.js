import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PhotoWall = (props) => {
    return(
        <div>
            <Link to="/AddPhoto" className="addIcon">.</Link>
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