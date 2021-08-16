import React, { Component } from 'react';
import Api from '../../../services/services';
import Select from 'react-select';
import swal from 'sweetalert';
class pengajuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layanans:[],
            files:[],
            KodeTiket:"",
            NPWP_PerusahaanPerseorangan: "",
            Nama_PerusahaanPerseorangan: "",
            NomorNIK: "",
            Nama_KTP: "",
            Nomor_Telepon: "",
            Jenis_Permohonan: "",
            NPWP: "",
            Nama_Perusahaan: "",
            Alamat: "",
            email:"",
            Jenis_Modul: "",
            Jenis_Perusahaan: "",
            Status: "Menunggu_Konfirmasi",
            published_at: "2021-08-12T17:24:12.000Z",
            selectedOption1:null,
            selectedOption2:null
        }    

      }
      funswal = (status,pesan,style)=>{
        swal(status,pesan, style);
    } 


      componentDidMount(){
        Api.get('/data-layanans/'+localStorage.getItem('idlayanan'))
        .then(res => {
          const layanans = res.data;
          this.setState({ layanans: layanans.Persyaratan });
          
        })
        
      }
      
     

      handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangefile = async (e) =>{
        
        const data = new FormData()
        data.append('files', e.target.files[0] )
        await  Api.post('/upload', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
              const files = this.state.files;
              files.push(res.data[0].id)
              this.setState({
                files: files
            })
            console.log(this.state.files)
      })
    }
    handleChangeselect1 = selectedOption1 => {
        this.setState({ selectedOption1:selectedOption1.value });
        console.log(`Option selected:`, selectedOption1);
      };
      handleChangeselect2 = selectedOption2 => {
        this.setState({ selectedOption2:selectedOption2.value });
        console.log(`Option selected:`, selectedOption2);
      };
    handleSubmit = () =>{

        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        if(mm  < 10){
            var bulan = "0" +  mm;
        }else{
            var bulan = mm;
               
        }

        if(dd  < 10){
            var hari = "0" +  dd;
        }else{
            var hari = dd;
               
        }
         
        const formattoday = yyyy+"-"+bulan+"-"+hari;
        console.log(formattoday)
       const kode =this.state.Nama_KTP.substring(0,3).toUpperCase();
        console.log(kode)
        const data ={
            KodeTiket:kode+yyyy+bulan+hari,
            NPWP_PerusahaanPerseorangan: this.state.NPWP_PerusahaanPerseorangan,
            Nama_PerusahaanPerseorangan: this.state.Nama_PerusahaanPerseorangan,
            NomorNIK: this.state.NomorNIK,
            Nama_KTP: this.state.Nama_KTP,
            Nomor_Telepon: this.state.Nomor_Telepon,
            Jenis_Permohonan: this.state.Jenis_Permohonan,
            NPWP: this.state.NPWP,
            Nama_Perusahaan: this.state.Nama_Perusahaan,
            Alamat: this.state.Alamat,
            email:this.state.email,
            Jenis_Modul: this.state.selectedOption2,
            Jenis_Perusahaan: this.state.selectedOption1,
            Status: "Menunggu_Konfirmasi",
            published_at: formattoday+"T17:24:12.000Z",
            data_layanan: localStorage.getItem('idlayanan'),
            "Persyaratan": this.state.files
        }
        console.log(data)
        // const hapusfoto = this.state.files.map(id=>{
        //     Api.delete('/upload/files/'+id)
        //     .then(res => {
        //         console.log(res)
              
        //     })
            
        //         return id
        //      })

             Api.post('data-permohonans',data)
             .then(res => {
               this.funswal("Sukses","Pesan Terkirim","success");
       })   
    }

    render() {
        console.log(this.state.file)
        console.log(this.state.layanans)
        const persyaratan = this.state.layanans.map(Persyaratan=>{
            return(
                                        <div key={Persyaratan.id} className="row">
                                            <div className="col col-6">
                                                <h5 style={{textAlign:"Left",width:"100%"}}>{Persyaratan.Title}</h5>
                                            </div>
                                            <div className="col col-6">
                                                <h5 style={{textAlign:"Left",width:"100%"}} htmlFor="">Upload Persyaratan</h5>
                                                <input onChange={this.handleChangefile} style={{textAlign:"Left",width:"100%"}} type="file" name={"file"+Persyaratan.id} />
                                                <p style={{textAlign:"Left",width:"100%", color:"red"}}>* Ukuran file maximal {Persyaratan.BesarFile}</p>
                                            </div>
                                        </div>
              )
            })

            
const options1 = [
    { value: 'Export', label: 'Export' },
    { value: 'Import', label: 'Import' },
  ];

  const options2 = [
    { value: 'Modul 1', label: 'Modul 1' },
    { value: 'Modul 2', label: 'Modul 2' },
  ];

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
                                                <input onChange={this.handleChange} name="NPWP_PerusahaanPerseorangan" type="number" style={{textAlign:"Left",width:"100%"}} id="npwpperusahaan" placeholder="Masukan NPWP Perusahaan" />
                                                <label name="NPWP_PerusahaanPerseorangan" htmlFor="namaerusahaan" style={{textAlign:"Left",width:"100%"}}>Nama Perusahan</label>
                                                <input onChange={this.handleChange} name="Nama_PerusahaanPerseorangan" type="text" style={{textAlign:"Left",width:"100%"}} id="namaperusahaan" placeholder="Masukan nama Perusahaan" />
                                                <label htmlFor="jenispermohonan" style={{textAlign:"Left",width:"100%"}}>Jenis Permohonan</label>
                                                <div className="row">
                                                    <div className="col col-1">
                                                    <input onChange={this.handleChange} type="radio" style={{textAlign:"Left",width:"100%",float:"right"}} id="jenispermohonan1" name="Jenis_Permohonan" value="Perusahaan Pribadi" />
                                                        
                                                    </div>
                                                    <div className="col col-11">
                                                    <label htmlFor="jenispermohonan1" style={{textAlign:"Left",width:"100%"}}>

Untuk Perusahaan kami sendiri
</label>     
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col col-1">
                                                    <input onChange={this.handleChange} type="radio" style={{textAlign:"Left",width:"100%",float:"right"}} id="jenispermohonan2" name="Jenis_Permohonan" value="Mitra Perusahan" />
                                                        
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
                                                <input onChange={this.handleChange} name="Nama_KTP" type="text" style={{textAlign:"Left",width:"100%"}} id="namaPic" placeholder=" Masukan Nama PIC" />
                                            <label htmlFor="NIKPic" style={{textAlign:"Left",width:"100%"}}>NIK PIC</label>
                                                <input onChange={this.handleChange} name="NomorNIK" type="number" style={{textAlign:"Left",width:"100%"}} id="NIKPic" placeholder=" Masukan NIK PIC" />
                                                <label htmlFor="TeleponPic" style={{textAlign:"Left",width:"100%"}}>Telepon PIC</label>
                                                <input onChange={this.handleChange} name="Nomor_Telepon" type="number" style={{textAlign:"Left",width:"100%"}} id="TeleponPic" placeholder=" Masukan Telepon PIC" />
                                            
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
                                                <input onChange={this.handleChange} name="NPWP" type="number" style={{textAlign:"Left",width:"100%"}} id="npwp" placeholder="Masukan NPWP" />
                                                <label htmlFor="nampaerusahaan2" style={{textAlign:"Left",width:"100%"}}>Nama Perusahan</label>
                                                <input onChange={this.handleChange} name="Nama_Perusahaan" type="text" style={{textAlign:"Left",width:"100%"}} id="nampaerusahaan2" placeholder="Masukan nama Perusahaan" />
                                                <label htmlFor="jenisperusahan" style={{textAlign:"Left",width:"100%"}}>Jenis Perusahan</label>
                                                <Select
        onChange={this.handleChangeselect1}
        options={options1}
      />
                                            </div>
                                            <div className="col col-6">
                                            <label htmlFor="Alamat" style={{textAlign:"Left",width:"100%"}}>Alamat </label>
                                                <input onChange={this.handleChange} name="Alamat" type="text" style={{textAlign:"Left",width:"100%"}} id="Alamat" placeholder="Masukan Alamat" />
                                                <label htmlFor="emailperusahan" style={{textAlign:"Left",width:"100%"}}>Email</label>
                                                <input onChange={this.handleChange} name="email" type="Email" style={{textAlign:"Left",width:"100%"}} id="emailperusahan" placeholder="Masukan Email" />
                                                <label htmlFor="Modul" style={{textAlign:"Left",width:"100%"}}>Jenis Modul</label>
                                                <Select
        onChange={this.handleChangeselect2}
        options={options2}
      />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Upload Persyaratan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        
                                        {persyaratan}
                                        
                                    </div>
                                </div>

                            </div>
                            
                            <button onClick={this.handleSubmit} style={{width:"100%", padding:"10px", fontWeight:"600"}} className="btn-primary">Submit</button>
            </div>
            </div>
        );
    }
}

export default pengajuan;