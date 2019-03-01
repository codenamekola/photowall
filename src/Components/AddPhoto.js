import React,{Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const link = e.target.elements.link.value;
        const description = e.target.elements.description.value;
        const post = {
            id:Number(new Date()),
            link,
            description
        }
        //if input values are not null then call addphoto from props
        if(link && description){
            this.props.addPhoto(post);
        }
    }
    render(){
        return(
            <div>
                <h1>Add your photo link</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="link" name="link"/>
                        <input type="text" placeholder="description" name="description"/>
                        <button>Post to wall</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;