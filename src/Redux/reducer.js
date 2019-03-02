import posts from '../Data/posts';
//assign state a default value of posts
const postReducer = function(state = posts,action){
    switch(action.type){
        case 'REMOVE_POST':
            return [...state.slice(0,action.index),...state.slice(action.index + 1)];
            //first slice will get all array elements before the index of specified element
            //second slice gets all elements after the index of specified element
        case 'ADD_POST':
            return [...state,action.post];
            //destructure the array into its individual objects and add the new post object
        default: return state;
    }
}

export default postReducer;