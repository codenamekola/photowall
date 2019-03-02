//action to remove a post
export function removePost(index){
    return{
        type:'REMOVE_POST',
        index:index
    }
}
//action to add a post
export function addPost(post){
    return{
        type:'ADD_POST',
        post:post
    }
}