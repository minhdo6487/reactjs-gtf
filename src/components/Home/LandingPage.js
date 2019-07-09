import React, {Component} from 'react';
import NavbarMenu from "../Navigation/NavbarMenu";
import './../../style.css'


class LandingPage extends Component {

    render() {
        let {compo} = this.props;
        return (
            <div>
                <div className="try_mt">
                    <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
                        <div className="container">
                            <a href="/" className="navbar-brand">
                                <img src={require("../../assets/img/glfin_logoc.png")} width="50" height="50" alt=""/>
                                <h3 className="d-inline align-middle"> GLFIN</h3>
                            </a>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <NavbarMenu />
                            </div>
                        </div>
                    </nav>
                </div>
                {compo}

                {/*FOOTER*/}
                <footer id="main-footer" className="py-5 bg-dark text-white footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"><h3>Get Started</h3>
                                <ul>
                                    <li><a className="text-white" href="https://crowdo.com/account/login"> Lend for Returns</a></li>
                                    <li><a className="" href="https://crowdo.com/account/login"> Funding with Loans</a></li>
                                    <li><a href="https://crowdo.com/account/login"> Funding with Equity</a></li>
                                </ul>
                            </div>
                            {/*<div className="offset-md-1"/>*/}
                            <div className="col-md-3"><h3>Legal &amp; Compliance</h3>
                                <ul className="legal-and-compliance">
                                    <li><a href="https://crowdo.com/legal/combined/terms_of_use">Terms of Use</a></li>
                                    <li><a href="https://crowdo.com/legal/combined/privacy_policy">Privacy Notice</a>
                                    </li>
                                    <li><a href="https://crowdo.com/legal/combined/risk_warning">Risk Warning</a></li>
                                    <li><a href="https://crowdo.com/legal/combined/disclaimer">Disclaimer</a></li>
                                    <li><a href="https://crowdo.com/legal/combined/investor_membership_agreement">Investor
                                        Membership</a></li>
                                    <li><a href="https://crowdo.com/legal/combined/issuer_membership_agreement">Issuer
                                        Membership</a></li>
                                </ul>
                            </div>
                            {/*<div className="offset-md-1"/>*/}
                            <div className="col-md-2">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="https://crowdo.com/information/faq"> FAQs</a></li>
                                    <li><a href="mailto:enquiry@crowdo.com?subject=Crowdo%20-%20Enquiry"> Contact Us</a>
                                    </li>
                                    <li><a
                                        href="mailto:enquiry@crowdo.com?subject=Crowdo%20-%20Complaints">Complaints</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <h3>Subscribe to latest news</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Your e-mail address"
                                           aria-label="email" aria-describedby="button-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary text-white" type="button"
                                                    id="button-addon2">Subscribe
                                            </button>
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


export default LandingPage;


