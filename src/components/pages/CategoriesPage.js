import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontFamily : theme.typography.fontFamily,
    fontSize : theme.typography.fontSize,
    padding : '0px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class CategoriesPage extends React.Component {
  state = {
    lamps : false,
    edible : false,
    night : false,
    candle : false,
    health : false,
    tiles : false
  };

  handleClick = (value) => {
    this.setState(state => ({ [value]: !state[value] }));
    if(!this.state[value]){
      console.log(value)
      this.props.category(value);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Categories</ListSubheader>}
        className={classes.root}
      >
        {/* <ListItem button>
          <ListItemText primary="Salt Lamps" />
        </ListItem> */}
        <ListItem button onClick={ () => { this.handleClick("lamps") } }>
          <ListItemText primary="Salt Lamps" />
          {this.state.lamps ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.lamps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Natural Lamps" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Crafted Lamps" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="USB Lamps" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Basket Lamps" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Aroma Lamps" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={ () => { this.handleClick("edible") } }>
          <ListItemText primary="Edible Salt" />
          {this.state.edible ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.edible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Black Salt" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="White Salt" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Pink Salt" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Animal Lick Salt" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={ () => { this.handleClick("night") } }>
          <ListItemText primary="Night Lamps" />
          {this.state.night ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.night} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Holder Lamps" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Basket Lamps" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={ () => { this.handleClick("candle") } }>
          <ListItemText primary="Candle Holders" />
          {this.state.candle ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.candle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Natural Shaped" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Crafted" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={ () => { this.handleClick("health") } }>
          <ListItemText primary="Health-Care Products" />
          {this.state.health ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.health} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Salt Detoxer" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Salt Inhalers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Bath Salt" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={ () => { this.handleClick("tiles") } }>
          <ListItemText primary="Salt Tiles" />
          {this.state.tiles ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.tiles} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Masage Tiles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Rough Tiles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Wall Stone" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

CategoriesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoriesPage);