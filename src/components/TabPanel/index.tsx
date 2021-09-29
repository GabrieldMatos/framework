import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "typesafe-actions";
import { ApplicationState } from "../../store";
import { loadTodosRequest } from "../../store/ducks/todos/actions";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index }) => {
  const todos = useSelector((state: ApplicationState) =>
    state.todos.data.filter((item) => !item.completed)
  );
  const dones = useSelector((state: ApplicationState) =>
    state.todos.data.filter((item) => item.completed)
  );
  const loading = useSelector((state: ApplicationState) => state.todos.loading);
  const dispatch = useDispatch<Dispatch<Action>>();

  useEffect(() => {
    if (value !== index) return;
    dispatch(loadTodosRequest(value + 1));
  }, [dispatch, value, index]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <div style={{ display: "flex" }}>
          <Card sx={{ width: "100%", height: "80vh", marginRight: 4 }}>
            <CardHeader title="To do" />
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: "65vh",
                  "& ul": { padding: 0 },
                }}
              >
                {todos.map((item) => (
                  <ListItem>
                    <Card sx={{ minWidth: "100%", maxWidth: 400 }}>
                      <CardContent>
                        <Typography variant="body2">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography variant="body2">
                              {loading ? (
                                <Skeleton
                                  sx={{ minWidth: 350 }}
                                  animation="wave"
                                />
                              ) : (
                                item.title
                              )}
                            </Typography>
                            {!loading && (
                              <RadioButtonUncheckedIcon color="disabled" />
                            )}
                          </div>
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", height: "80vh" }}>
            <CardHeader title="Done" />
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: "65vh",
                  "& ul": { padding: 0 },
                }}
              >
                {dones.map((item) => (
                  <ListItem>
                    <Card sx={{ minWidth: "100%", maxWidth: 400 }}>
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body2">
                            {loading ? (
                              <Skeleton
                                sx={{ minWidth: 350 }}
                                animation="wave"
                              />
                            ) : (
                              item.title
                            )}
                          </Typography>
                          {!loading && (
                            <CheckCircleOutlineIcon color="success" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TabPanel;
