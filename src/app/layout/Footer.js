import { React, useEffect } from 'react';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import './Footer.css'
import { useStore } from "../../app/stores/store";

function Footer() {
    const { meStore } = useStore();
    useEffect(() => {
        meStore.loadMes();
    }, [meStore])
    return (
        <footer className="footer">
            <p className="footer__title">Truong Nhon</p>
            <div className="footer__social">
                <a href={meStore?.me?.socialLink?.facebook}>
                    <FacebookOutlined />
                </a>
                <a href={meStore?.me?.socialLink?.facebook}>
                    <InstagramOutlined />
                </a>
            </div>
            <p className="footer__copy">&#169; Vo Thuong Truong Nhon. All rights reserved</p>
        </footer>
    )
};
export default Footer;