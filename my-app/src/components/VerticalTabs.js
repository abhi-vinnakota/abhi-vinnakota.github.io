import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../css/Experience.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#0a192f', color: 'white', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="white"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#66FCF1"
          }
        }}
        MuiTab-root={{
          style: {
            color: "white"
          }
        }}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="UIUC" {...a11yProps(0)} />
        <Tab label="Caterpillar" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className ="job-title">
          Full-Stack Developer <span className = "title-colored">@ mehtadatalab</span>
        </div>
        <div className = "job-date">
          October 2021 - Present
        </div>
        <div className = "job-description">
        - Utilized Observable Notebook to create story-telling and compelling data notebooks
        </div>
        <div className = "job-description">
        - Integrated d3.js notebooks into statically loaded web pages which showcase data in a clean format
        </div>
        <div className = "job-description">
        - Constructed a webpage from scratch with HTML, CSS, and JS to showcase a professor's data visualizations
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className ="job-title">
          SWE Intern <span className = "title-colored">@ Caterpillar</span>
        </div>
        <div className = "job-date">
          June 2019 - August 2019
        </div>
        <div className = "job-description">
        - Implemented backend processes using the Java Spring framework to ensure proper data flow to the website
        </div>
        <div className = "job-description">
        - Utilized SQL to retrieve customer data from the Dealer Portal and generated reports for two business analysts
        </div>
        <div className = "job-description">
        - Constructed the user interface of the dealer management order form using HTML, CSS, and Javascript
        </div>
      </TabPanel>
    </Box>
  );
}