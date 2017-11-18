/**
 * Created by ofer on 07/11/17.
 */
import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from "lodash";
export default  function ( state = {}, action) {
    switch (action.type){
        case FETCH_POST:
            //this is ES5 syntax:
            // const post = action.payload.data;
            // const newState  =  {...state };
            // newState[post.id] = post;
            // return newState;

            return {...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}