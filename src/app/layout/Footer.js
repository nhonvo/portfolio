import { React, useEffect } from 'react';
import { LinkedinOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
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
                <a href={meStore?.me?.links[0]?.name}>
                    <FacebookOutlined />
                </a>
                <a href={meStore?.me?.links[1]?.name}>
                    <LinkedinOutlined />
                </a>
                <a href={meStore?.me?.links[2]?.name}>
                    <GithubOutlined />
                </a>
            </div>
            <p className="footer__copy">&#169; Vo Thuong Truong Nhon. All rights reserved</p>
        </footer>
    )
};
export default Footer;