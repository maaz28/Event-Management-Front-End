import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Location from '@material-ui/icons/LocationCity';
import Contact from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Email';

class ContactPage extends Component {
  render() {
    return (
                                <Paper elevation={1}>
                                <Grid container spacing={24}>
                                    <Grid item xs={2}>
                                    <Location style = {{marginLeft : 8}}/>
                                    </Grid>
                                    <Grid item xs={10}>
                                    <p>Head Office: Suite No. 222, Industrial Town, Karachi, Pakistan</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Contact style = {{marginLeft : 8}}/>
                                    </Grid>
                                    <Grid item xs={10}>
                                    <p>
                                    +92 21 3 2465512
                                    </p>
                                    </Grid>
                                    
                                    <Grid item xs={2}>
                                    <Mail style = {{marginLeft : 8}}/>
                                    </Grid>
                                    <Grid item xs={10}>
                                    <p>
                                        info@pinksaltworks.com
                                    </p>
                                    </Grid>
                                </Grid>
                                </Paper>
    );
  }
}

export default ContactPage;
