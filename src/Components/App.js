import Main from './Main';
import {connect} from 'react-redux';
import * as actions from '../Redux/actions';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';//allows redux and react-router to work smoothly together

const mapStateToProps = (state) => {
    return {
        posts: state
        //state data can now be accessed via this.props.posts in the component
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions,dispatch);
    //all actions will now be available as a prop to the Main component
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
//App is now a new component that is a merger or connection of an existing component (Main)
//and the state/store of the application
export default App;