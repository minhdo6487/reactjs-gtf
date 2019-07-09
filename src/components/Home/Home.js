import React, {Component} from 'react';
import './../../style.css'


class Home extends Component {
    render() {
        return (
            <div>
                {/*SHOWCASE*/}
                <section id="showcase" className="py-5">
                    <div className="primary-overlay text-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <h1 className="display-2 mt-5 pt-5">
                                        Do What You Dream Of...
                                    </h1>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora!</p>
                                    <a href="infos" className="btn btn-outline-secondary btn-lg text-white">
                                        <i className="fas fa-arrow-right"/> Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*BOXES*/}
                <section id="boxes" className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card text-center border-primary mb-resp">
                                    <div className="card-body">
                                        <h3 className="dark-blue">Be Better</h3>
                                        <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center boxes-primary text-white mb-resp">
                                    <div className="card-body">
                                        <h3>Be Smarter</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center border-primary mb-resp">
                                    <div className="card-body">
                                        <h3 className="dark-blue">Be Faster</h3>
                                        <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-center boxes-primary text-white">
                                    <div className="card-body">
                                        <h3>Be Stronger</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, deserunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*ABOUT / WHY SECTION*/}
                <section id="about" className="py-5 text-center bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="info-header mb-5">
                                    <h1 className="dark-blue pb-3">
                                        Join GLFIN
                                    </h1>
                                    <div className="row">
                                        <a href="/login" className="col-sm-6">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h3>Become a borrwer</h3>
                                                    <br/>
                                                    <span
                                                        className="btn btn-outline-primary btn-circle">See your rates
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/login" className="col-sm-6">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h3>Become a lender</h3>
                                                    <br/>
                                                    <span
                                                        className="btn btn-outline-primary btn-circle">See your rates
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/*ACCORDION*/}
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0">
                                                <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                                                    <i className="fas fa-arrow-circle-down"/> Our Services: Peer to Business Loans and Equity Crowdfunding
                                                </div>
                                            </h5>
                                        </div>

                                        <div id="collapse1" className="collapse show">
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h4>Peer-to-Peer Lending</h4>
                                                        <img alt="p2p" src={require("./../../assets/img/p2p_success.png")} width="100%" height="auto"/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h5>How It Works</h5>
                                                        <p className="text-justify">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                                                        labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                                                        expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                                                        facilis consequatur tenetur nam pariatur fuga nisi!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*AUTHORS*/}
                <section id="authors" className="my-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="info-header mb-5">
                                    <h1 className="dark-blue pb-3">
                                        Meet The Authors
                                    </h1>
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={require("../../assets/img/person1.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Susan Williams</h3>
                                        <h5 className="text-muted">Lead Writer</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={require("../../assets/img/person2.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Grace Smith</h3>
                                        <h5 className="text-muted">Co-Writer</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={require("../../assets/img/person3.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>John Doe</h3>
                                        <h5 className="text-muted">Editor</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={require("../../assets/img/person4.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Kevin Swanson</h3>
                                        Meet The Authors
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.</p>
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4">
                                                <a href="http://facebook.com">
                                                    <i className="fab fa-facebook"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://twitter.com">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <a href="http://instagram.com">
                                                    <i className="fab fa-instagram"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*MEDIA*/}
                <section id="contact" className="bg-light py-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="info-header mb-5">
                                    <h1 className="dark-blue pb-3">
                                        Media
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <img alt="cna" className="center img-fluid"
                                     src={require("./../../assets/img/media_asia_chanel.png")}/>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <img alt="cna" className="center img-fluid"
                                     src={require("./../../assets/img/media_asia_chanel.png")}/>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <img alt="cna" className="center img-fluid"
                                     src={require("./../../assets/img/media_asia_chanel.png")}/>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <img alt="cna" className="center img-fluid"
                                     src={require("./../../assets/img/media_asia_chanel.png")}/>
                            </div>
                        </div>
                    </div>
                </section>


                {/*FOOTER*/}
                {/*<footer id="main-footer" className="py-5 bg-dark text-white footer-top">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-2"><h3>Get Started</h3>*/}
                {/*                <ul>*/}
                {/*                    <li><a className="text-white" href="https://crowdo.com/account/login"> Lend for Returns</a></li>*/}
                {/*                    <li><a className="" href="https://crowdo.com/account/login"> Funding with Loans</a></li>*/}
                {/*                    <li><a href="https://crowdo.com/account/login"> Funding with Equity</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            /!*<div className="offset-md-1"/>*!/*/}
                {/*            <div className="col-md-3"><h3>Legal &amp; Compliance</h3>*/}
                {/*                <ul className="legal-and-compliance">*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/terms_of_use">Terms of Use</a></li>*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/privacy_policy">Privacy Notice</a>*/}
                {/*                    </li>*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/risk_warning">Risk Warning</a></li>*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/disclaimer">Disclaimer</a></li>*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/investor_membership_agreement">Investor*/}
                {/*                        Membership</a></li>*/}
                {/*                    <li><a href="https://crowdo.com/legal/combined/issuer_membership_agreement">Issuer*/}
                {/*                        Membership</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            /!*<div className="offset-md-1"/>*!/*/}
                {/*            <div className="col-md-2">*/}
                {/*                <h3>Support</h3>*/}
                {/*                <ul>*/}
                {/*                    <li><a href="https://crowdo.com/information/faq"> FAQs</a></li>*/}
                {/*                    <li><a href="mailto:enquiry@crowdo.com?subject=Crowdo%20-%20Enquiry"> Contact Us</a>*/}
                {/*                    </li>*/}
                {/*                    <li><a*/}
                {/*                        href="mailto:enquiry@crowdo.com?subject=Crowdo%20-%20Complaints">Complaints</a>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-5">*/}
                {/*                <h3>Subscribe to latest news</h3>*/}
                {/*                <div className="input-group mb-3">*/}
                {/*                    <input type="text" className="form-control" placeholder="Your e-mail address"*/}
                {/*                           aria-label="email" aria-describedby="button-addon2"/>*/}
                {/*                        <div className="input-group-append">*/}
                {/*                            <button className="btn btn-outline-secondary text-white" type="button"*/}
                {/*                                    id="button-addon2">Subscribe*/}
                {/*                            </button>*/}
                {/*                        </div>*/}
                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</footer>*/}
            </div>
        );
    }
}


export default Home;


