import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import Api from '../../services/services';
import swal from 'sweetalert';

class Header extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      token:''
    }
    localStorage.setItem('token','');
    localStorage.setItem('namauser','');
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}


funswal = (status,pesan,style)=>{
    swal(status,pesan, style);
} 

Handlelogout (){
  swal("", {
      title: 'Kamu yakin ingin keluar?',
      icon: 'warning',
      buttons: ["Cancel", "Yes!"],
    }).then(function(value) {
      if (value) {
              sessionStorage.removeItem('token');
              window.location.reload();
      }
  });

}
      
  handleLogin = (e) => {

     const data = {
      identifier: this.state.username,
      password: this.state.password,
     }
     console.log(data)
    Api.post('/auth/local',data)
      .then(res => {
        console.log(res.data)
        if(res.data != null){
          console.log(res.data.jwt)
          localStorage.setItem('token',res.data.jwt);
          localStorage.setItem('namauser',res.data.user.username);
          this.setState({
            token:res.data.jwt
          })  
          this.funswal('Berhasil',"Akses diterima","success");
          
        }else{
          this.funswal('Gagal',"Username dan Password tidak cocok","warning");
            
        }
      }).catch((err) => {
        console.log(err);
        this.funswal('Gagal',"Username dan Password tidak cocok","warning");
      });   
      
  }

  handlesidebar = (e) => {
    if(this.props.button != "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
      const btnsidebar = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
    this.props.updatebutton(btnsidebar)  
    }else{
      const btnsidebar = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";
    this.props.updatebutton(btnsidebar)
    }
  }

  
  render(){  
   
    if(this.state.token !== ""){
      var formstyle ={
        display:"none"
      }
      var btn2 ={
        display:"block"
      }
      var btn1 ={
        display:"none"
      }
      var namauser = localStorage.getItem('namauser');
   }else{
     var formstyle ={
       display:"block"
     }
     var btn1 ={
      display:"block"
    }
    var btn2 ={
      display:"none"
    }
    var namauser = "Masuk Akun";
   }
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button onClick={this.handlesidebar} id="sidebarToggleTop"  className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle signinbtn" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="d-lg-inline small">{namauser}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <div className="formlogin" style={formstyle}>
                                  <input onChange={this.handleChange} type="email" name="username" placeholder="Masukan username anda" />
                                  <input onChange={this.handleChange} type="password" name="password" placeholder="Masukan password" />
                                </div>
                                <a onClick={this.Handlelogout} className="dropdown-item btn-primary" href="#" data-toggle="modal" data-target="#logoutModal" style={btn2}>
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Keluar
                                </a>
                                <a onClick={this.handleLogin} className="dropdown-item btn-primary" href="#" data-toggle="modal" data-target="#logoutModal" style={btn1}>
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Masuk
                                </a>
                            </div>
                        </li>

                    </ul>
                </nav>
    )
  }
}
const mapDipatchToprops = (dispatch) =>{
  return{
    updatebutton: (data) => dispatch({type:'UPDATEBUTTON',databutton:data}),
  }
  }

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity,
    button:state.databutton
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(Header);