import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

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
                <Route path="/" exact render={()=>(
                <div>
                    <Title title={'PhotoWall'}/>
                    <PhotoWall posts={this.state.posts} removePhoto={this.removePhoto}/>
                </div>
                )}/>
                {/**the next route can do without a render property since its displaying
                only one component. If there were multiple components then we would use render */}
                <Route path="/AddPhoto" exact component={AddPhoto}/>
            </div>
        )
    }
}

export default Main;