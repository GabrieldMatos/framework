import {
  AppBar,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "typesafe-actions";
import CloseIcon from "@mui/icons-material/Close";
import { ApplicationState } from "../../store";
import { Album } from "../../store/ducks/albums/types";
import { loadPhotosRequest } from "../../store/ducks/photos/actions";
// import { Container } from './styles';
export interface Props {
  album: Album;
  open: boolean;
  onClose: (value: boolean) => void;
}

const AlbumDialog: React.FC<Props> = ({ album, open, onClose }) => {
  const photos = useSelector((state: ApplicationState) => state.photos.data);
  const handleClose = () => {
    onClose(false);
  };

  const dispatch = useDispatch<Dispatch<Action>>();

  useEffect(() => {
    dispatch(loadPhotosRequest(album.id));
  }, [dispatch, album]);

  return (
    <Dialog fullWidth scroll={"paper"} onClose={handleClose} open={open}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {album.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <ImageList variant="quilted" cols={2} sx={{ height: 650, padding: 2 }}>
          {photos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={item.thumbnailUrl}
                srcSet={`${item.url} 2x`}
                alt={item.id.toString()}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} subtitle={album.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Dialog>
  );
};

export default AlbumDialog;
