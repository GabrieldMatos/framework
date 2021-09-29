import React, { Dispatch, useEffect, useState } from "react";

import { Container, Content } from "./styles";
import { Tabs, Tab, Box } from "@mui/material";
import Posts from "../../components/Posts";
import { loadPostsRequest } from "../../store/ducks/posts/actions";
import { loadUsersRequest } from "../../store/ducks/users/actions";
import { useDispatch } from "react-redux";
import { Action } from "typesafe-actions";
import Todos from "../../components/Todos";
import Albums from "../../components/Albums";
import { loadAlbumsRequest } from "../../store/ducks/albums/actions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Home: React.FC = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch<Dispatch<Action>>();

  useEffect(() => {
    dispatch(loadPostsRequest());
    dispatch(loadUsersRequest());
    dispatch(loadAlbumsRequest());
  }, [dispatch]);

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Content>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          <Tab label="Posts" />
          <Tab label="Albums" />
          <Tab label="Todos" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Posts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Albums />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Todos />
        </TabPanel>
      </Content>
    </Container>
  );
};

export default Home;
