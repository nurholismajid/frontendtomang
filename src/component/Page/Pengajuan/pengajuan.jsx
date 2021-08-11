import React, { Component } from 'react';

class pengajuan extends Component {
    render() {
        return (
            <div>
                <h1>Formulir pengajuan {localStorage.getItem('titleform')}</h1>
                <br></br>
                <div className="row">
                <div className="card shadow mb-12 search">
                                <a href="#collapseCardExample1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Data Pemohon</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col col-6">
                                                <label htmlFor="npwpperusahaan" style={{textAlign:"Left",width:"100%"}}>NPWP Perusahaan Atau Pribadi</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="npwpperusahaan" placeholder="Masukan NPWP Perusahaan" />
                                                <label htmlFor="namaerusahaan" style={{textAlign:"Left",width:"100%"}}>Nama Perusahan</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="namaperusahaan" placeholder="Masukan nama Perusahaan" />
                                                <label htmlFor="jenispermohonan" style={{textAlign:"Left",width:"100%"}}>Jenis Permohonan</label>
                                                <div className="row">
                                                    <div className="col col-1">
                                                    <input type="radio" style={{textAlign:"Left",width:"100%",float:"right"}} id="jenispermohonan1" name="jenispermohonan" value="Perusahaan Pribadi" />
                                                        
                                                    </div>
                                                    <div className="col col-11">
                                                    <label htmlFor="jenispermohonan1" style={{textAlign:"Left",width:"100%"}}>

Untuk Perusahaan kami sendiri
</label>     
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col col-1">
                                                    <input type="radio" style={{textAlign:"Left",width:"100%",float:"right"}} id="jenispermohonan2" name="jenispermohonan" value="Mitra Perusahan" />
                                                        
                                                    </div>
                                                    <div className="col col-11">
                                                    <label htmlFor="jenispermohonan2" style={{textAlign:"Left",width:"100%"}}>

Untuk Perusahaan Orang lain
</label>     
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col col-6">
                                            <label htmlFor="namaPic" style={{textAlign:"Left",width:"100%"}}>Nama Lengkap PIC</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="namaPic" placeholder=" Masukan Nama PIC" />
                                            <label htmlFor="NIKPic" style={{textAlign:"Left",width:"100%"}}>NIK PIC</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="NIKPic" placeholder=" Masukan NIK PIC" />
                                                <label htmlFor="TeleponPic" style={{textAlign:"Left",width:"100%"}}>Telepon PIC</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="TeleponPic" placeholder=" Masukan Telepon PIC" />
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                               <br />
                                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Data Perusahaan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col col-6">
                                                <label htmlFor="npwp" style={{textAlign:"Left",width:"100%"}}>NPWP </label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="npwp" placeholder="Masukan NPWP" />
                                                <label htmlFor="nampaerusahaan2" style={{textAlign:"Left",width:"100%"}}>Nama Perusahan</label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="nampaerusahaan2" placeholder="Masukan nama Perusahaan" />
                                                <label htmlFor="jenisperusahan" style={{textAlign:"Left",width:"100%"}}>Jenis Perusahan</label>
                                                <select style={{padding:"10px",width:"100%"}} name="" id="jenisperusahan">
                                                    <option value="Export">Export</option>
                                                    <option value="Import">Import</option>
                                                </select>
                                            </div>
                                            <div className="col col-6">
                                            <label htmlFor="Alamat" style={{textAlign:"Left",width:"100%"}}>Alamat </label>
                                                <input type="text" style={{textAlign:"Left",width:"100%"}} id="Alamat" placeholder="Masukan Alamat" />
                                                <label htmlFor="emailperusahan" style={{textAlign:"Left",width:"100%"}}>Email</label>
                                                <input type="Email" style={{textAlign:"Left",width:"100%"}} id="emailperusahan" placeholder="Masukan Email" />
                                                <label htmlFor="Modul" style={{textAlign:"Left",width:"100%"}}>Jenis Modul</label>
                                                <select style={{padding:"10px",width:"100%"}} name="" id="Modul">
                                                    <option value="Modul 1">Modul 1</option>
                                                    <option value="Modul 2">Modul 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            
                            <button style={{width:"100%", padding:"10px", fontWeight:"600"}} className="btn-primary">Submit</button>
            </div>
            </div>
        );
    }
}

export default pengajuan;