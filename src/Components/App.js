import Main from './Main';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state
        //state data can now be accessed via this.props.posts in the component
    }
}

const App = connect(mapStateToProps)(Main);
//App is now a new component that is a merger or connection of an existing component (Main)
//and the state/store of the application
export default App;