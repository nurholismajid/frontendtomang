import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'
import {connect} from 'react-redux';
import baseurl from '../../../services/baseurl';
class tutorial extends Component {
    constructor(props) {
        super(props);
    
        this.state = { windowWidth: window.innerWidth };
    
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
        
      }
       handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
       };
    
       openModal (idyoutube) {
        this.setState({
          isOpen: true,
          idyoutube:idyoutube
        })
      }
      
       componentDidMount() {
        window.addEventListener("resize", this.handleResize);
       }
      
    

    render() {
        console.log(this.props.tutorials)
        const tutorials = this.props.tutorials.map(tutorial=>{
            return(
                <div className="col col-md-3">
                                    <div className="cardvideo shadow">
                                      <div className="thumnail" style={{position:"relative"}}>
                                          <img style={{width:"100%"}} src={baseurl+tutorial.Cover.formats.small.url} alt="" className="covervideo" />
                                          <button onClick={()=>this.openModal(tutorial.IDVideo)}  className="btnplay youtube-link">
                                              <center><i className="fas fa-play-circle"></i></center>
                                          </button>
                                      </div>
                                      <div className="contentvideo">
                                          <h3 className="titlevideo">{tutorial.Title.substring(0, 18)}</h3>
                                          <p className="descriptionvideo">
                                              <span><a href={tutorial.UrlChanel}><i className="fab fa-youtube"></i> {tutorial.NamaChanel}</a></span><span><i className="fas fa-calendar-alt"></i> {tutorial.created_at.substring(0,10)}</span>
                                          </p>
                                      </div>
                                    </div>
                </div>
              )
            })

        return (
            <div>
                <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId={this.state.idyoutube} onClose={() => this.setState({isOpen: false})} />
            <div className="row">
                {tutorials}
            </div>
            </div>
        );
    }
}

const mapStatetoprops=(state)=>{
    return{
      tutorials:state.datatutorial,
         
     }
  }
  
  export default connect(mapStatetoprops)(tutorial);