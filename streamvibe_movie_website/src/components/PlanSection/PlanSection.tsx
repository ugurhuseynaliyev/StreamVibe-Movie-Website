import { Box, Tab, Tabs } from "@mui/material";
import "../../styles/PlanSection.css";
import React from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";

const PlanSection = () => {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className="planSection">
      <div className="planSectionTop">
        <div className="planSectionLeft">
          <h1 className="planSectionTitle">
            Choose the plan that's right for you
          </h1>
          <p className="planSectionDescription">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="planSectionRight">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                background: "#0F0F0F",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #262626",
                "& .MuiTab-root": {
                  textTransform: "none",
                  color: "#9E9E9E",
                  borderRadius: "8px",
                  minHeight: "30px",
                  fontSize: "12px",
                },
                "& .Mui-selected": {
                  backgroundColor: "#1F1F1F",
                  color: "#fff !important",
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab label="Monthly" {...a11yProps(0)} className="tab" />
              <Tab label="Yearly" {...a11yProps(1)} className="tab" />
            </Tabs>
          </Box>
        </div>
      </div>
      <CustomTabPanel value={value} index={0}>
        <MonthlyPlan />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <YearlyPlan />
      </CustomTabPanel>
    </section>
  );
};

export default PlanSection;
