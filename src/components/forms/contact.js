import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { validEmail } from '../../util';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '260px',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Form extends React.Component {
  state ={
    name : '',
    email : '',
    message : '',
    errEmail : false,
    error : false
  }


//   titleErrHandler = (ev) => {
//     console.log(ev.target.value);
//     if(ev.target.value === ''){
//       this.setState({
//         title_err : true,
//         titleHelperText : 'This Field is required'
//       })
//     }
//     else if(ev.target.value.length > 40){
//       this.setState({
//         title_err : true,
//         titleHelperText : 'Title is longer than 40 characters'
//       })
//     }
//   }

  nameHandler = (ev) => {
  this.setState({
    name : ev.target.value
  })
  }

  emailHandler = (ev) => {
    this.setState({
      email : ev.target.value
    })
  }

  messageHandler = (ev) => {
    this.setState({
      message : ev.target.value
    })
  }

  submitHandler = (ev) => {
    ev.preventDefault()
    if (this.state.message === "" || this.state.name === "") {
      this.setState({
        error : true
      })
    }
    else if(!validEmail(this.state.email)){
      this.setState({
        errEmail : true
      })
    }
    else{
      let obj = {
        name : this.state.name,
        email : this.state.email,
        message : this.state.message
      }
      this.setState({
        errEmail : false,
        error : false
      })
      //Call parents function and pass data
      this.props.submit(obj);
    }
  }

  emailBlurHandler = (ev) => {
    if(!validEmail(ev.target.value)){
      this.setState({
        errEmail : true
      })
    }
    else{
      this.setState({
        errEmail : false
      })
    }
  }

  render() {
    return (
      <form  onSubmit = {this.submitHandler}>
								<h5>name</h5>
                <input 
                type="text" 
                value={this.state.name} 
                onChange = {this.nameHandler}
                />
								<h5>emailaddress</h5>
                <input 
                type="text" 
                value = {this.state.email} 
                onChange = {this.emailHandler}
                onBlur = {this.emailBlurHandler}
                />
                <label style = {{color : 'red', fontWeight : 'normal'}}>{(this.state.errEmail) ? "Email is not valid" : ""}</label>
								<h5>message</h5>
								 <textarea value = {this.state.message} onChange = {this.messageHandler}></textarea>
                 <div style = {{color : 'red'}}>{(this.state.error) ? ("All Fields Are Required") : ("")}</div>
								 <input type="submit" value="send"/>
						 	 </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);