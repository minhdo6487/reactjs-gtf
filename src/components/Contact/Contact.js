import React, {Component} from 'react';
import './../../style.css'


class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact text-white">
                <div className="d-flex align-items-center primary-overlay">
                    <div className="col-sm-6 ">
                        <h2>About</h2>
                        <p className="text-justify">
                            Glfin – Một công ty năng động nhiều năm kinh nghiệm,
                            chuyên cung cấp các dịch vụ chuyên nghiệp trong các lĩnh vực tư vấn doanh nghiệp,
                            tư vấn định cư và bất động sản tại các nước Châu Âu, Châu Á, Caribbean,…
                            Hợp tác với các hãng luật lớn trên thế giới,
                            các nhà phát triển dự án và các chuyên gia tư vấn hàng đầu tại
                            Mỹ, Caribbean, Châu Âu, Châu Á…
                            Chúng tôi cam kết mang đến dịch vụ chuyên nghiệp,
                            an toàn với độ bảo mật cao nhất cho thân chủ của chúng tôi.
                        </p>
                    </div>
                    <div className="col-sm-6 ">
                        <h2>Thong tin cong ty</h2>
                        <p>
                            <i className="fa fa-home"/> <span>Ten công ty</span>: Công ty TNHH GLFIN
                        </p>
                        <p>
                            <i className="fa fa-map-marked"/> <span>Dia chi</span>: Văn phòng số 5.07 Everrich infinity, 290 An Duong Vuong, p4, Q5, HCM.
                        </p>
                        <p>
                            <i className="fa fa-phone"/> <span>Lien he</span>: (+84) 39 - 4573 - 187
                        </p>
                        <p>
                            <i className="fa fa-envelope"/> <span>Email</span>: glfin@glfin.vn
                        </p>
                    </div>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6587947593957!2d106.67855421425634!3d10.760757962426542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c5cc1cd69%3A0x706abd5742678bb5!2zMjkwIEFuIETGsMahbmcgVsawxqFuZywgUGjGsOG7nW5nIDMsIFF14bqtbiA1LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1549852788463"
                    width="100%" height="350" allowFullScreen="">
                </iframe>
            </div>
        );
    }
}


export default Contact;
