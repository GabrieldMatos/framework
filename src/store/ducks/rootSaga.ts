import { all, takeLatest } from "redux-saga/effects";
import { loadAlbums } from "./albums/sagas";
import { AlbumsTypes } from "./albums/types";
import { loadComments } from "./comments/sagas";
import { CommentsTypes } from "./comments/types";
import { loadPhotos } from "./photos/sagas";
import { PhotosTypes } from "./photos/types";
import { loadPosts } from "./posts/sagas";
import { PostTypes } from "./posts/types";
import { loadTodos } from "./todos/sagas";
import { TodosTypes } from "./todos/types";
import { loadUsers } from "./users/sagas";
import { UsersTypes } from "./users/types";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PostTypes.LOAD_REQUEST, loadPosts),
    takeLatest(UsersTypes.LOAD_REQUEST, loadUsers),
    takeLatest(CommentsTypes.LOAD_REQUEST, loadComments),
    takeLatest(TodosTypes.LOAD_REQUEST, loadTodos),
    takeLatest(AlbumsTypes.LOAD_REQUEST, loadAlbums),
    takeLatest(PhotosTypes.LOAD_REQUEST, loadPhotos),
  ]);
}
