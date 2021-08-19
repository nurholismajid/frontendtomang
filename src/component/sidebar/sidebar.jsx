import React, { Component } from 'react';
import {link, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import './sidebar.css'
class Sidebar extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      btnsidebar : this.props.button
    }
   
  }

  

  funswal = (status,pesan,style)=>{
    swal(status,pesan, style);
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
    return(
      <div>
        <title>{this.props.option.NameWeb + "-" + this.props.option.TagLine}</title>
        <ul className={this.props.button} id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img src={this.props.option.Logo} width="40px" />
                </div>
                <div className="sidebar-brand-text mx-3">{this.props.option.NameWeb}</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Home</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/pencarian">
                    <i className="fas fa-fw fa-search"></i>
                    <span>Pencarian</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/datalayanan">
                <i className="fas fa-fw fa-edit"></i>
                    <span>Pengajuan</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-info-circle"></i>
                    <span>Info</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className=" py-2 collapse-inner rounded">
                        <Link className="nav-link" to="/datalayanan"><i class="fas fa-server"></i> Data Layanan</Link>
                        <Link className="nav-link" to="/tutorial"><i class="far fa-play-circle"></i> Video Tutorial</Link>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://api.whatsapp.com/send?phone=6282215687135&text=Hello%20ada%20yg%20bisa%20kami%20bantu%3F%E2%98%BA%EF%B8%8F">
                <i class="fas fa-bullhorn"></i>
                    <span>Pengaduan</span></a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/faq">
                <i class="fas fa-question-circle"></i>
                    <span>Faq</span> </Link>
            </li>
            <div className="text-center d-none d-md-inline">
                <button onClick={this.handlesidebar} className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        </div>
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

export default connect(mapStatetoprops,mapDipatchToprops)(Sidebar);