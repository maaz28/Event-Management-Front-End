import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import './style.css'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Location from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import { millisecondsToDate } from '../../utils/helper';

class PageView extends Component {

  
  render() {

    const {data} = this.props;

    return (
      <Paper elevation = {1} style = {{ padding : '36px'}}>
      <Typography variant="h4" gutterBottom align = "center">
        {data.title}
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={1}>
      <Location/>
      </Grid>    
      <Grid item xs={11}>
      <Typography variant="subtitle1" gutterBottom  align = "center" style = {{textTransform : "uppercase"}}>
      {data.venue}
      </Typography>
      </Grid>     
      </Grid>
      <Divider />
      <Grid container spacing={24} style = {{marginTop : '16px'}}> 
      <Grid item xs>
      <Typography variant="subtitle1" gutterBottom  align = "center">
      STARTS
      <br/>
      {millisecondsToDate(data.date.start)}
      </Typography>
      </Grid>      
      <Grid item xs>
      <Typography variant="subtitle1" gutterBottom  align = "center">
      ENDS
      <br/>
      {millisecondsToDate(data.date.end)}
      </Typography>
      </Grid>
      </Grid>
      {/* <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography> */}
      {/* <Typography variant="button" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" gutterBottom>
        overline text
      </Typography> */}
      </Paper>
    )
  }
}

export default PageView
