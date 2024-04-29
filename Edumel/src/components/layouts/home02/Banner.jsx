import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
            <section className="banner banner-style-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-content">
                                <h1>OgaLearn Digital Academy </h1>
                                <p>With Ogalearn Learning Made Easy. Our Classes is both Online and Physical</p>
                                
                               <div className="category-name">
                                   <span>Popular:</span>
                                   <Link to="#">Design ,</Link>
                                   <Link to="#">Development ,</Link>
                                   <Link to="#">Marketing ,</Link>
                                   <Link to="#">Affiliate</Link>
                               </div>
                            </div>
                        </div>
            
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-img-round mt-5 mt-lg-0">
                                <img src="assets/images/banner/ogapics.jpeg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            

        );
    }
}

export default Banner;

