import React, { Component } from 'react';
import './pencarian.css'

class pencarian extends Component {
    render() {
        return (
            <div className="row">
                <div className="card shadow mb-12 search">
                                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Tracking Layanan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <h4 style={{color:"#000"}}>Masukan Kode pengajuan</h4>
                                        <input type="text" placeholder="Masukan kode pendaftaran anda" />
                                        <button className="btn-primary">Cari status Permohonan Saya</button>
                                        <button className="btn-secondery">Cari status Permohonan Saya</button>
                                    </div>
                                </div>
                            </div>
            </div>
        );
    }
}

export default pencarian;