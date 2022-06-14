import { makeStyles } from "@material-ui/core";
import { Box, StyledEngineProvider, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import CardsList from "../CardsList";

const useStyles = makeStyles({
  tabsclass: {
    width: "304px",
    height: "23px",

    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "23px",

    alignItems: "flex-start",
    textTransform: "none",

    "&:focus": {
      color: "#22C870",
    },

    // "&.css-1aquho2-MuiTabs-indicator" for tabs not
    // .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected for tabs
  },
});

function TabsComponent() {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <StyledEngineProvider injectFirst>
      <TabContext value={value}>
        <Box width="91%" position={"relative"} left="7%">
          <TabList
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2CE080",
              },
            }}
          >
            <Tab
              label="Currently Reading"
              value="1"
              className={classes.tabsclass}
            />
            <Tab label="Finished" value="2" className={classes.tabsclass} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CardsList finished={true} checkComplete={31}></CardsList>
        </TabPanel>
        <TabPanel value="2">
        <CardsList readAgain={true} checkComplete={100}></CardsList>
        </TabPanel>
      </TabContext>
    </StyledEngineProvider>
  );
}

export default TabsComponent;
