import React, { Component } from 'react';
import './pencarian.css'
import Api from '../../../services/services';
class pencarian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:null,
            data:null,
            KodeTiket:"",
            Nama_KTP:"",
            Nama_Perusahaan:"",
            Status:""
        }    

      }

      handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

      handleSubmit = () =>{
        Api.get('data-permohonans/?KodeTiket='+this.state.search)
        .then(res => {
          const data = res.data;
          this.setState({
            data,
            KodeTiket:data[0].KodeTiket,
            Nama_KTP: data[0].Nama_KTP,
            Nama_Perusahaan: data[0].Nama_Perusahaan,
            Status: data[0].Status,

        })
          console.log(data)
        })
      }
    render() {
        if(this.state.data == null){
        var style ={
            display:"none"
        }
        }else{
            var style ={
                display:"block"
            }
        }
        return (
            <div className="row">
                <div className="card shadow mb-12 search">
                                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Tracking Layanan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <h4 style={{color:"#000"}}>Masukan Kode pengajuan</h4>
                                        <input onChange={this.handleChange} name="search" type="text" placeholder="Masukan kode pendaftaran anda" />
                                        <button onClick={this.handleSubmit} className="btn-primary">Cari status Permohonan Saya</button>
                                        
                                    </div>
                                </div>
                            </div>
            <div className="card shadow  col col-12" style={style}>
                <table width="100%">
                    <tr>
                        <th>Kode Tiket</th>
                        <th>Nama Pemohon</th>
                        <th>Nama Perusahan</th>
                        <th>Status Permohonan</th>
                    </tr>
                    <tr>
                        <td>{this.state.KodeTiket}</td>
                        <td>{this.state.Nama_KTP}</td>
                        <td>{this.state.Nama_Perusahaan}</td>
                        <td>{this.state.Status}</td>
                    </tr>
                </table>
            </div>
            </div>
        );
    }
}

export default pencarian;