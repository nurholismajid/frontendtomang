import React, { Component } from 'react';
import {connect} from 'react-redux';
import baseurl from '../../../services/baseurl';
import'./home.css';
class Home extends Component {
    
    render() {
        const banners = this.props.banner;
        console.log(banners)

         const loopbanner = banners.map(banner=>{
            return(
            <div key={banner.id} className="col-12 col-md-4">
                        <div className="card-img">
                            <a href={banner.Link}>
                                <img src={baseurl+banner.Image.url} width="100%" alt="" />
                            </a>
                        </div>
                    </div>
              )
            })

        return (
            <div>
                <div className="row">
                    {loopbanner}
                </div>
            </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      banner:state.datahome
    }
  }
  
  export default connect(mapStatetoprops)(Home);