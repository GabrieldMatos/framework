import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { User } from "../../store/ducks/users/types";
import CommentsDialog from "../CommentsDialog";

const Posts: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const handleClickOpen = (e: any, id: number) => {
    e.stopPropagation();
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const posts = useSelector((state: ApplicationState) => state.posts.data);
  const loading = useSelector((state: ApplicationState) => state.posts.loading);
  const UserLoading = useSelector(
    (state: ApplicationState) => state.users.loading
  );
  const users = useSelector((state: ApplicationState) => state.users.data);

  const getUserById = (userId: number): User | undefined =>
    users.find(({ id }) => id === userId);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "75vh",
        "& ul": { padding: 0 },
      }}
    >
      {posts.map((item) => {
        return (
          <ListItem key={item.id}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                avatar={
                  UserLoading ? (
                    <Skeleton animation="wave" variant="circular">
                      <Avatar />
                    </Skeleton>
                  ) : (
                    <Avatar>{getUserById(item.userId)?.name[0]}</Avatar>
                  )
                }
                title={
                  UserLoading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    getUserById(item.userId)?.name
                  )
                }
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {loading ? <Skeleton animation="wave" /> : item.title}
                </Typography>
                <Typography variant="body2">
                  {loading ? <Skeleton animation="wave" /> : item.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={(e) => handleClickOpen(e, item.id)}
                  size="small"
                >
                  Comments
                </Button>
              </CardActions>
            </Card>
            {id === item.id && (
              <CommentsDialog open={open} onClose={handleClose} post={item} />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Posts;
