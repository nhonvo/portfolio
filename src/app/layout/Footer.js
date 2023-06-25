import React from 'react';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Truong Nhon</p>
            <div className="footer__social">
                <a href="https://www.facebook.com/nhonvtt/">
                    <FacebookOutlined />
                </a>
                <a href="https://www.instagram.com/vothuongtruongnhon/">
                    <InstagramOutlined />
                </a>
            </div>
            <p className="footer__copy">&#169; Vo Thuong Truong Nhon. All rights reserved</p>
        </footer>
    )
};
export default Footer;