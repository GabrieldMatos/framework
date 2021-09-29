import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "typesafe-actions";
import { ApplicationState } from "../../store";
import { loadCommentsRequest } from "../../store/ducks/comments/actions";
import { Post } from "../../store/ducks/posts/types";

// import { Container } from './styles';
export interface Props {
  post: Post;
  open: boolean;
  onClose: (value: boolean) => void;
}

const CommentsDialog: React.FC<Props> = ({ post, open, onClose }) => {
  const comments = useSelector(
    (state: ApplicationState) => state.comments.data
  );
  const loading = useSelector(
    (state: ApplicationState) => state.comments.loading
  );
  const handleClose = () => {
    onClose(false);
  };

  const dispatch = useDispatch<Dispatch<Action>>();

  useEffect(() => {
    dispatch(loadCommentsRequest(post.id));
  }, [dispatch, post]);

  return (
    <Dialog fullWidth scroll={"paper"} onClose={handleClose} open={open}>
      <DialogTitle>{post.title}</DialogTitle>
      <DialogContent dividers>
        <List sx={{ pt: 0 }}>
          {comments.map((item) => (
            <ListItem>
              <Card sx={{ width: "100%" }}>
                <CardHeader
                  avatar={
                    loading ? (
                      <Skeleton animation="wave" variant="circular">
                        <Avatar />
                      </Skeleton>
                    ) : (
                      <Avatar>{item.email[0]}</Avatar>
                    )
                  }
                  title={loading ? <Skeleton animation="wave" /> : item.email}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {loading ? <Skeleton animation="wave" /> : item.name}
                  </Typography>
                  <Typography variant="body2">
                    {loading ? <Skeleton animation="wave" /> : item.body}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsDialog;
