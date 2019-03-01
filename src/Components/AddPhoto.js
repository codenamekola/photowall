import React,{Component} from 'react';

class AddPhoto extends Component{
    render(){
        return(
            <div>
                <h1>Add your photo link</h1>
                <div className="form">
                    <form>
                        <input type="text" placeholder="link"/>
                        <input type="text" placeholder="description"/>
                        <button>Post to wall</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;