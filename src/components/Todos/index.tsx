import React, { SyntheticEvent, useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import TabPanel from "../TabPanel";

const Todos: React.FC = () => {
  const users = useSelector((state: ApplicationState) => state.users.data);
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "70vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {users.map((item) => {
          return <Tab label={item.name} {...a11yProps(item.id)} />;
        })}
      </Tabs>
      <>
        {users.map((item) => {
          return <TabPanel value={value} index={item.id - 1}></TabPanel>;
        })}
      </>
    </Box>
  );
};

export default Todos;
