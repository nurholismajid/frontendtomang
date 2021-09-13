import React, { Component } from 'react';
import {connect} from 'react-redux';
class Footer extends Component  {

  constructor(props) {
    super(props);

    this.state = {
    }
  
  }

  
  render(){  
    return(
        <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>{this.props.option.CopyRight}</span>
                    </div>
                </div>
                <a class="chat" href="#" data-toggle="modal" data-target="#chat"><img src="/chat.png" alt="" /></a>
                <div class="modal fade" id="chat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Chat</h5>
        <button style={{width:"max-content"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="row">
          <div className="col-12">
            <a className="dropdown-item btn-primary text-center tool-tip" href="#">
              <i class="fas fa-comment-smile"></i>
              Pengaduan
              <span class="tooltiptext1">Apabila anda mempunyai keluhan atas pelayanan yang kami berikan, klik untuk menghubungi  petugas Kepatuhan Internal</span>
            </a><br></br>
            <a className="dropdown-item btn-primary text-center tool-tip" href="#">
              <i class="fas fa-comment-smile"></i>
              Layanan
              <span class="tooltiptext2">Apabila anda memiliki kendala / pertanyaan terkait pelayanan, klik untuk menghubungi petugas Pelayanan</span>
            </a>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
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