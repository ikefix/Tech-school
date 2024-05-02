import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'fad fa-users',
                    title: 'Join Community ',
                    text: 'At ogalearn Community you will get access to lots of mentors and also you will meet with persons of the same interest and goal. It is a great place to be for newbies and for All.',
                    extraClassName: 'icon-bg-1',
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Skilled Instructors',
                    text: 'Our instructors are highly skilled and ready to guide you all through the journey of becoming better in your desire pursuit',
                    extraClassName: 'icon-bg-2',
                },
                {
                    id: 3,
                    icon: 'fa fa-video',
                    title: 'Online Live Classes',
                    text: 'Distance is never a barrier in leaning a Tech skill. Our Live class is perfect and efficient for any one seeking to acquire a Tech skill',
                    extraClassName: 'icon-bg-3',
                },
                
                
            ]
        }
    }

    render() {
        return (

            <section className="features-intro">
                <div className="container">
                    <div className="feature-inner">
                        <div className="row">

                        {
                            this.state.features.map((data,i) =>(
                            
                            <div className="col-xl-4 col-lg-4 " key={data.id}>
                                <div className="feature-item feature-style-left">
                                    <div className={`feature-icon ${data.extraClassName}`}>
                                        <i className={data.icon}></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>{data.title}</h4>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </section>

            
                    
        );
    }
}

export default Features;
