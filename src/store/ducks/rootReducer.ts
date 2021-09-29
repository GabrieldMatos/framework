import { combineReducers } from "redux";
import albums from "./albums";
import comments from "./comments";
import photos from "./photos";
import posts from "./posts";
import todos from "./todos";

export default combineReducers({
  posts,
  todos,
  comments,
  photos,
  albums,
});
