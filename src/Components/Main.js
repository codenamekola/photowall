import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts:[
                {id:1,description:'Mercedes',link:'https://i.imgur.com/IyEp7mf.jpg'},
                {id:2,description:'Rolls Royce',link:'https://i.imgur.com/IyEp7mf.jpg'},
                {id:3,description:'Maserati',link:'https://i.imgur.com/IyEp7mf.jpg'},
            ]
        }

        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(id){
        this.setState((state) => ({
            posts: state.posts.filter(post => post.id !== id)
        }))
    }

    render(){
        return(
            <div>
                <Title title={'PhotoWall'}/>
                <PhotoWall posts={this.state.posts} removePhoto={this.removePhoto}/>
            </div>
        )
    }
}

export default Main;