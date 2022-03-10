import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styles from "./tab-panel.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
      className={"tab-panel"}
    >
      {value === index && (
        <div className={styles["inner-div"]}>
          {children}
        </div>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;