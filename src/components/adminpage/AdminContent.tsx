import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Home,
  BarChart,
  PermMedia,
  Comment,
  Settings,
} from "@mui/icons-material";
import AdminHomeTab from "./AdminHomeTab";
import AdminStatsTab from "./AdminStatsTab";
import AdminMediaTab from "./AdminMediaTab";
import AdminCommentsTab from "./AdminCommentsTab";
import AdminSettingsTab from "./AdminSettingsTab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Tab Props
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab function
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ my: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Prop Manager to make it vertical
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AdminContent() {
  // constant value to indicate to the site what state it should be
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handles changes to the tab
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className=" bg-gray-300 pt-25 pb-10">
      <main className="relative min-h-170 mx-10 flex-column justify-items-center rounded-xl bg-white border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Tabs Design and Details */}
        <Box
          sx={
            isMobile
              ? {
                  display: "block",
                  width: "100%",
                  height: "100%",
                }
              : {
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }
          }
        >
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={
              isMobile
                ? {
                    borderBottom: 1,
                    borderColor: "divider",
                    width: 650,
                    paddingLeft: 5,
                  }
                : {
                    borderRight: 1,
                    borderColor: "divider",
                    width: 250,
                    height: 635,
                  }
            }
          >
            <Tab
              icon={<Home />}
              iconPosition="start"
              label="Home"
              {...a11yProps(0)}
            />
            <Tab
              icon={<BarChart />}
              iconPosition="start"
              label="Stats"
              {...a11yProps(1)}
            />
            <Tab
              icon={<PermMedia />}
              iconPosition="start"
              label="Media"
              {...a11yProps(2)}
            />
            <Tab
              icon={<Comment />}
              iconPosition="start"
              label="Comments"
              {...a11yProps(3)}
            />
            <Tab
              iconPosition="start"
              icon={<Settings />}
              label="Settings"
              {...a11yProps(4)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <AdminHomeTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AdminStatsTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AdminMediaTab />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AdminCommentsTab />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <AdminSettingsTab />
          </TabPanel>
        </Box>
      </main>
    </div>
  );
}
