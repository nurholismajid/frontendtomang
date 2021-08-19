import React, { Component } from 'react';
import {connect} from 'react-redux';
import Api from '../../../services/services';
import DataTable from 'react-data-table-component';
import {link, Link} from 'react-router-dom';
class datapengjuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persyaratans :[],
            percatrgory :[],
            search:""
        }    
      }

    componentDidMount(){
        this.setState({ percatrgory:this.props.layanans });
    }

    handelPercategory(id){
        Api.get('/data-layanans?category_layanan='+id)
        .then(res => {
          const percatrgory = res.data;
          this.setState({ percatrgory });
        })
    }

    handelform(id , nama){
      localStorage.setItem('titleform', nama);
      localStorage.setItem('idlayanan', id);
    }

    handelPersyaratan(data){
        this.setState({ persyaratans:data });
    }
  
    render() {
      console.log(this.props.categorys) 
          const navcategory = this.props.categorys.map(category=>{
            return(
                <a key={category.id} onClick={()=>this.handelPercategory(category.id)} className="nav-link" id={"v-pills-"+category.id+"-tab"} data-toggle="pill" href={"#v-pills-"+category.id} role="tab" aria-controls={"v-pills-"+category.id} aria-selected="false">{category.Title}</a>
              )
            })
                
                const datalayanan = this.state.percatrgory.map(layanan=>{
                  if(localStorage.getItem('token') !== ""){
                    
                    var btn1 ={
                      display:"block"
                    }

                 }else{
                   var btn1 ={
                    display:"none"
                  }
                }
                    return({
                        id : layanan.id,
                        namalayanan : layanan.NamaLayanan,
                        janjilayanan : layanan.JanjiLayanan,
                        persyaratan : <button onClick={()=>this.handelPersyaratan(layanan.Persyaratan)} type="button" class="btn btn-primary" data-toggle="modal" data-target="#popuppersyaratan">Persyaratan</button>,
                        permohonan : <Link style={btn1} onClick={()=>this.handelform(layanan.id,layanan.NamaLayanan)} to="/pengajuan" className="btn btn-success">Pengajuan</Link>,
                     } )
                    })

                console.log(this.state.persyaratans)

                const listsyarat = this.state.persyaratans.map(syaarat=>{
                    return(
                        <div className="col col-12">
                        <div className="row">
                        <div className="col col-2">{syaarat.id}</div>
                        <div className="col col-8">{syaarat.Title}</div>
                        <div className="col col-2">{syaarat.BesarFile}</div>
                        </div>
                        </div>
                        )
                    })

                const columns = [
                    {
                      name: 'Id',
                      selector: 'id',
                      sortable: true,
                    },
                    {
                      name: 'Nama layanan',
                      selector: 'namalayanan',
                      sortable: true,
                    },
                    {
                        name: 'Janji Layanan',
                        selector: 'janjilayanan',
                        sortable: true,
                      },
                      {
                        name: 'Persyaratan',
                        selector: 'persyaratan',
                        sortable: true,
                      },
                      {
                        name: 'Permohonan',
                        selector: 'permohonan',
                        sortable: true,
                      }
                  ];
            
        return (
            <div className="row">
                <div className="card shadow mb-12 search">
                                <a  href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)",textAlign:"left"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Pengajuan Layanan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-12 col-md-1">
                                        <h6>Pilih Kateogri</h6>
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a onClick={()=>this.componentDidMount()} className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Semua</a>
                                            {navcategory}                                                             
                                        </div>
                                        </div>
                                        <div className="col-12 col-md-11">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <DataTable
                                            columns={columns}
                                            data={datalayanan}
                                            pagination
                                            filter
                                            />    
                                            </div>
                                            
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="popuppersyaratan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Persyaratan</h5>
        <button style={{width:"max-content"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="row">
            {listsyarat}
        </div>
      </div>
      <div class="modal-footer">
      <p>Persyaratan yang ditampilkan pada halaman ini adalah persyaratan umum. Beberapa persyaratan layanan tertentu bersifat dinamis dan opsional. Kunjungi halaman formulir permohonan untuk mengetahui persyaratan secara langsung.</p>
      <p>Pada layanan tertentu petugas dimungkinkan untuk memberikan respon permintaan konfirmasi data/dokumen tambahan. Kami sarankan kepada Anda agar memeriksa tracking kode tiket secara rutin. Tautan halaman permintaan dan pengiriman konfirmasi akan ditampilkan pada hasil tracking.</p>
      </div>
    </div>
  </div>
</div>
                            </div>
            </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      categorys:state.datacategory,
      layanans:state.datalayanan   
     }
  }
  
  export default connect(mapStatetoprops)(datapengjuan);