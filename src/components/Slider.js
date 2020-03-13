import React from 'react';

function Slider() {

    return (

        <section id="slider" className="slider-element slider-parallax full-screen">
            <div className="slider-parallax-inner">

                <div className="full-screen" style={{ background: "url('images/slider/boxed/4.jpg')", backgroundSize: 'cover' }}>
                    <div className="container clearfix">

                        <img src="images/appshowcase/slider-iphone.png" alt="" className="d-none d-lg-block" style={{ position: 'absolute', left: 0, bottom: 0 }} data-height-lg="450" />

                        <div className="vertical-middle no-fade">
                            <div className="col_half dark fright nobottommargin" data-animate="fadeIn">

                                <div className="emphasis-title">
                                    <h1>The new way to create awesome websites. Try using <strong>Canvas</strong> Template.</h1>
                                </div>

                                <div className="d-none d-md-block">
                                    <a href="/" className="button button-desc button-border button-light button-rounded nomargin"><i className="icon-apple"></i><div>Start your Free Trial<span>30-Days &amp; No Credit card Required</span></div></a>
                                </div>

                                <div className="d-block d-md-none">
                                    <a href="/" className="button button-light button-xlarge button-rounded nomargin"><i className="icon-apple"></i>Start Free Trial</a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
}

export default Slider;
