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
            search:"",
            keterangan:"",
            token: localStorage.getItem('token')
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

    updatefilter(event){
      this.setState({
          search: event.target.value.substr(0,20)
      })
  }

    handelform(id , nama){
      localStorage.setItem('titleform', nama);
      localStorage.setItem('idlayanan', id);
    }

    handelPersyaratan(data, keterangan){
        console.log(keterangan)
        this.setState({ 
          persyaratans:data,
          keterangan
         });
    }
  
    render() {
      console.log(this.props.categorys) 
          const navcategory = this.props.categorys.map(category=>{
            return(
                <a key={category.id} onClick={()=>this.handelPercategory(category.id)} className="nav-link" id={"v-pills-"+category.id+"-tab"} data-toggle="pill" href={"#v-pills-"+category.id} role="tab" aria-controls={"v-pills-"+category.id} aria-selected="false">{category.Title}</a>
              )
            })
            const filter = this.state.percatrgory.filter(
              (datatemp) => {
                  return datatemp.NamaLayanan.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
              }
            )
            var datalayananjadi =[];
            if(filter.length > 0){
              datalayananjadi = filter; 
            }
                var nourut = 0;
                if(this.state.token !== null){
                var datalayanan = datalayananjadi.map(layanan=>{
                  nourut++;
                  if(this.state.token !== null){
                    
                    var btn1 ={
                      display:"block"
                    }

                 }else{
                   var btn1 ={
                    display:"none"
                  }
                }
                    return({
                        id : nourut,
                        namalayanan : layanan.NamaLayanan,
                        janjilayanan : layanan.JaniLayanan,
                        persyaratan : <button onClick={()=>this.handelPersyaratan(layanan.Persyaratan, layanan.Keterangan)} type="button" className="btn btn-primary" data-toggle="modal" data-target="#popuppersyaratan">Persyaratan</button>,
                        permohonan : <Link style={btn1} onClick={()=>this.handelform(layanan.id,layanan.NamaLayanan)} to="/pengajuan" className="btn btn-success">Pengajuan</Link>,
                     } )
                    })

                }else{

                  var datalayanan = datalayananjadi.map(layanan=>{
                    nourut++;
                    if(this.state.token !== null){
                      
                      var btn1 ={
                        display:"block"
                      }
  
                   }else{
                     var btn1 ={
                      display:"none"
                    }
                  }
                      return({
                          id : nourut,
                          namalayanan : layanan.NamaLayanan,
                          janjilayanan : layanan.JaniLayanan,
                          persyaratan : <button onClick={()=>this.handelPersyaratan(layanan.Persyaratan, layanan.Keterangan)} type="button" className="btn btn-primary" data-toggle="modal" data-target="#popuppersyaratan">Persyaratan</button>,
                         } )
                      })
                }

                console.log(this.state.persyaratans)
                var no = 0;
                const listsyarat = this.state.persyaratans.map(syaarat=>{
                  no++;  
                  return(
                        <div className="col col-12">
                        <div className="row">
                        <div className="col col-2">{no}</div>
                        <div className="col col-8">{syaarat.Title}</div>
                        <div className="col col-2">{syaarat.BesarFile}</div>
                        </div>
                        </div>
                        )
                    })
                if(this.state.token !== null){
                var columns = [
                    {
                      name: 'No',
                      selector: 'id',
                      sortable: true,
                      width: '100px',
                      center: true,
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
                        width: '150px',
                        center: true,
                      },
                      {
                        name: 'Persyaratan',
                        selector: 'persyaratan',
                        sortable: true,
                        width: '150px',
                      },
                      {
                        name: 'Permohonan',
                        selector: 'permohonan',
                        sortable: true,
                        width: '150px',
                      }
                  ];
                }else{
                  var columns = [
                    {
                      name: 'No',
                      selector: 'id',
                      sortable: true,
                      width: '100px',
                      center: true,
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
                        width: '150px',
                        center: true,
                      },
                      {
                        name: 'Persyaratan',
                        selector: 'persyaratan',
                        sortable: true,
                        width: '150px',
                      }
                  ];

                }
            
        return (
            <div className="row">
                <div className="card shadow mb-12 search">
                                <a  href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)",textAlign:"left"}}>
                                    <h6 className="m-0 font-weight-bold text-white">Pengajuan Layanan</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-12 col-md-2">
                                        <h6>Pilih Kategori</h6>
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a onClick={()=>this.componentDidMount()} className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Semua</a>
                                            {navcategory}                                                             
                                        </div>
                                        </div>
                                        <div className="col-12 col-md-10">
                                        <div className="d-sm-inline-block form-inline  navbar-search">
                            <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Pencarian" onChange={this.updatefilter.bind(this)} aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </div>
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
                                <div className="modal fade" id="popuppersyaratan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Persyaratan</h5>
        <button style={{width:"max-content"}} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
            {listsyarat}
        </div>
      </div>
      <div className="modal-footer">
      <div dangerouslySetInnerHTML={{__html: this.state.keterangan}} />
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