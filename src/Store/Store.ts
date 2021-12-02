import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const configureStore = () =>
// 	createStore(rootReducer, composedEnhancer);

const store = createStore(rootReducer, composedEnhancer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
