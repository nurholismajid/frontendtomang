import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../component/header/header';
import Sidebar from '../component/sidebar/sidebar';
import Footer from '../component/footer/footer';
import Home from '../component/Page/Home/Home';
import Pencarian from '../component/Page/pencarian/pencarian';
import Pengajuan from '../component/Page/Pengajuan/pengajuan';
import Datalayanan from '../component/Page/Data layanan/datalayanan';
import Tutorial from '../component/Page/tutorial/tutorial';
import Pengaduan from '../component/Page/Pengaduan/pengaduan';
import Faq from '../component/Page/FAQ/faq';
import Survei from '../component/Page/Survei/Survei';
function Mainrouter(){
    return(
        <BrowserRouter>
        <div id="wrapper">
            <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
             
            <div id="content">
              <Header />
              <div className="container-fluid">
       
             <Route path="/" exact component={Home} />
             <Route path="/pencarian" exact component={Pencarian} />
             <Route path="/pengajuan" exact component={Pengajuan} />
             <Route path="/datalayanan" exact component={Datalayanan} />
             <Route path="/tutorial" exact component={Tutorial} />
             <Route path="/pengaduan" exact component={Pengaduan} />
             <Route path="/faq" exact component={Faq} />
             <Route path="/survei" exact component={Survei} />
             </div>

            </div>
            <Footer/>
           </div>
        </div>

        </BrowserRouter>
    )
}

export default Mainrouter;