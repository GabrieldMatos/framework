import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AlbumsState } from "./ducks/albums/types";
import { CommentsState } from "./ducks/comments/types";
import { PhotosState } from "./ducks/photos/types";
import { PostsState } from "./ducks/posts/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { TodosState } from "./ducks/todos/types";
import { UsersState } from "./ducks/users/types";

export interface ApplicationState {
  posts: PostsState;
  users: UsersState;
  comments: CommentsState;
  todos: TodosState;
  albums: AlbumsState;
  photos: PhotosState;
}

const sagaMiddleare = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleare))
);

sagaMiddleare.run(rootSaga);
export { store };
