import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { User } from "../../store/ducks/users/types";
import AlbumDialog from "../AlbumDialog";

const Albums: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);
  const albums = useSelector((state: ApplicationState) => state.albums.data);
  const handleClickOpen = (e: any, id: number) => {
    e.stopPropagation();
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loading = useSelector(
    (state: ApplicationState) => state.albums.loading
  );
  const UserLoading = useSelector(
    (state: ApplicationState) => state.users.loading
  );
  const users = useSelector((state: ApplicationState) => state.users.data);

  const getUserById = (userId: number): User | undefined =>
    users.find(({ id }) => id === userId);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "80vh",
        padding: 2,
      }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {albums.map((item) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
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
              </CardContent>
              <CardActions>
                <Button
                  onClick={(e) => handleClickOpen(e, item.id)}
                  size="small"
                >
                  Photos
                </Button>
              </CardActions>
            </Card>
            {id === item.id && (
              <AlbumDialog open={open} onClose={handleClose} album={item} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Albums;
