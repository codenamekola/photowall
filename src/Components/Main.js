import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route,Link} from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Link to="/"><Title title={'PhotoWall'}/></Link>
                <Route path="/" exact render={()=>(
                <div>
                    <PhotoWall {...this.props}/>
                </div>
                )}/>
                {/**the next route can do without a render property since its displaying
                only one component. If there were multiple components then we would use render.
                But this cant take props so we revert back to the render atributr */}
                <Route path="/AddPhoto" exact render={({history})=>(
                    <AddPhoto {...this.props} onHistory={history}/>
                )}/>
            </div>
        )
    }
}

export default Main;