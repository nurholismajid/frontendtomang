import React, { Component } from 'react';
import {connect} from 'react-redux';
import Api from '../../../services/services';
import DataTable from 'react-data-table-component';
import {link, Link} from 'react-router-dom';
class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persyaratans :[],
            percatrgory :[],
            search:""
        }    
      }

    componentDidMount(){
        this.setState({ percatrgory:this.props.faq });
    }

    handelPercategory(id){
        Api.get('/faqs?category_faq='+id)
        .then(res => {
          const percatrgory = res.data;
          this.setState({ percatrgory });
        })
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
                console.log(this.state.percatrgory)
                const datafaq = this.state.percatrgory.map(faq=>{
                    const data = faq.ListPertanyaan.map(data=>{
                        
                        return(
                            <tr key={data.id}>
                                        <td>{data.Pertanyaan}</td>
                                        <td>{data.Jawaban}</td>
                                    </tr>
                        )})
                    return(
                        <div key={faq.id} className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+faq.id} aria-expanded="true" aria-controls={"collapse"+faq.id}>
                              {faq.Title}
                            </button>
                          </h2>
                        </div>
                    
                        <div id={"collapse"+faq.id} className="collapse" aria-labelledby={"heading"+faq.id} data-parent="#accordionExample">
                          <div className="card-body">
                            <table style={{width:"100%",textAlign:"left"}}>
                                <thead>
                                    <th>Pertanyaan</th>
                                    <th>Jawaban</th>
                                </thead>
                                <tbody>
                                    {data}
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      
                     )
                    })

                
            
        return (
            <div className="row">
                <div className="card shadow mb-12 search">
                                <a  href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" style={{background:"rgb(52 91 204)",textAlign:"left"}}>
                                    <h6 className="m-0 font-weight-bold text-white">FAQ</h6>
                                </a>
                                <div className="collapse show" id="collapseCardExample">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-12 col-md-3">
                                        <h6>Pilih Kategori</h6>
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a onClick={()=>this.componentDidMount()} className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Semua</a>
                                            {navcategory}                                                             
                                        </div>
                                        </div>
                                        <div className="col-12 col-md-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="accordion" id="accordionExample">
                                            {datafaq}
                                            </div>   
                                            </div>
                                            
                                        </div>
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
      categorys:state.datacategoryfaq,
      faq:state.datafaq,   
     }
  }
  
  export default connect(mapStatetoprops)(Faq);