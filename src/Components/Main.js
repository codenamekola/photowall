import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Route path="/" exact render={()=>(
                <div>
                    <Title title={'PhotoWall'}/>
                    <PhotoWall posts={this.props.posts}/>
                </div>
                )}/>
                {/**the next route can do without a render property since its displaying
                only one component. If there were multiple components then we would use render.
                But this cant take props so we revert back to the render atributr */}
                {/** <Route path="/AddPhoto" exact render={({history})=>(
                    <AddPhoto addPhoto={(post) => {
                        this.addPhoto(post);
                        //route back to home page using history
                        history.push('/');
                    }}/>
                )}/>*/}
            </div>
        )
    }
}

export default Main;