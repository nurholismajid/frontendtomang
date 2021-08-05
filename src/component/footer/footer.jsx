import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import Api from '../../services/services';
class Footer extends Component  {

  constructor(props) {
    super(props);

    this.state = {
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
        <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Beafakfak 2021</span>
                    </div>
                </div>
            </footer>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(Footer);