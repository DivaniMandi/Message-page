import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import yellow from '@material-ui/core/colors/yellow';
import Grid from '@material-ui/core/Grid';
import img from './defaultAvatar.svg';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      message: "",
      nameError:"",
      messageError:"",

    };

    this.handleChange = this.handleChange.bind(this);
    this.sendmessage=this.sendmessage.bind(this);
    this.handleimage=this.handleimage.bind(this);
    this.state={showNotification:false};
    this.state={changeAvatar:false}
    this.state = {file: img};
  }

  abbreviation() {
    var x = this.state.name.split(' ');
    if(x.length===1)
    return x[0].charAt(0).toUpperCase();


    return x[0].charAt(0).toUpperCase()+x[1].charAt(0).toUpperCase();
  };

  validate(){
    let nameError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = 'Name cannot be empty'
    }

    if (!this.state.message) {
      messageError = 'Message cannot be empty'
    }

    if (nameError || messageError) {
      this.setState({
        nameError,
        messageError
      });
      return false;
    }
    return true;

  };

  handleimage(event) {
    if (event.target.files[0]) {
      if (event.target.files[0].size <= 5000000 &&
        (event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/png")) {
        this.setState({
          showdefAvatar:false,
          changeAvatar:false,
          file:
            URL.createObjectURL(event.target.files[0])
        })
      }
      else {
        alert("Incorrect file format or size. Upload JPEG or PNG file (5Mb Max)");
      }
    }

    this.setState({
      showdefAvatar:true,    
    })    
  };

 handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  } 


  sendmessage(event) {
    const { name, message } = this.state;

    const isValid=this.validate();

    if (isValid) {
      this.setState({
        showNotification: true
        
      })
      console.log(`${name}, ${message}`);

      if(this.state.file===img){
        this.setState({
          changeAvatar:true
        })
      }
    }
    event.preventDefault();
  }

  render() {
    const { name, message} = this.state;

    return (
      <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box" style={Container.dims}>
          <div>
          <input type="file" onChange={this.handleimage}/>
          {this.state.changeAvatar?
           <Grid container justify="center" alignItems="center">
           <Avatar style={Container.yellowAvatarAfter}>{this.abbreviation()}</Avatar>
         </Grid>
          :
          <img src={this.state.file} style={Container.image} alt="avatar"/>
          }
          </div> 
            <form onSubmit={this.sendmessage}>
                <div className="field">
                <label className="label">Name</label>
                <div className="form-control">
                  <input className="input" type="inputType" name="name" onChange={this.handleChange} value={name || ''} required />
                  <div style={{color:"red"}}>{this.state.nameError}</div>
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="form-control" >
                <textarea className="textarea"  type="inputType" name="message" onChange={this.handleChange} value={message || ''} required ></textarea>
                <div style={{color:"red"}}>{this.state.messageError}</div>
                </div>
              </div>
              <button onClick={this.sendmessage} type="submit" className="button is-block is-info is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {
          this.state.showNotification ?          
           <div style={Container.alignment}>
              <div className="align-items-center">
                <div className="media">
                  <div className="media-left">
                    <figure>
                      {this.state.showdefAvatar?
                      <div>
                      <img src={this.state.file} style={Container.imageafter} alt="avatar"/>
                      </div> 
                      :
                      <Grid container justify="center" alignItems="center">
                      <Avatar style={Container.yellowAvatar}>{this.abbreviation()}</Avatar>
                    </Grid>
                      }

                    </figure>
                  </div>
                  <div className="media-content" style={Container.styles}>
                    <div className="content">
                      <p>
                        <strong>{this.state.name}</strong>
                        <br></br>
                        <small>
                          {this.state.message}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            : null
        }
      </div>  
    );
  }
}

const Container = {
  dims: {
      maxwidth:768,   
      width:'100%',
    },

  alignment:{
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
  },

  styles:{
    padding:10, 
  },

  yellowAvatar: {
    margin: 12,
    color: '#fff',
    backgroundColor: yellow[500],
  },

  image:{
    height:100,
    width:100,
    borderRadius:50,
  },

  imageafter:{
    marginLeft:10,
    marginTop:6,
    height:50,
    width:50,
    borderRadius:50,
  },

  yellowAvatarAfter:{
    margin: 12,
    color: '#fff',
    backgroundColor: yellow[500],
    height:100,
    width:100,
    fontSize:50,
  },
}


export default Form;