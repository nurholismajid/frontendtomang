import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import Api from '../services/services';
class ModalPopup extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      subject:"",
      email:"",
      date:"",
      message:""
    }
  
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

  funswal = (status,pesan,style)=>{
    swal(status,pesan, style);
} 
handleSubmit = (e) => {
    const data = {
      Subjek : this.state.subject,
      Email : this.state.email,
      Tanggal: this.state.date,
      Pesan: this.state.message
    }

    Api.post('contacts',data)
          .then(res => {
            this.funswal("Sukses","Pesan Terkirim","success");
    })   

  

}

  render(){  
    return(
    <div className="modal fade" id="hubungisaya" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog hubungisaya" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="hubungisayaLabel">Hubungi Saya</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                     
                </div>
                <div className="modal-footer">
                 <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(ModalPopup);