import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import logo1 from "../../assets/capivara_1.png";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="home">
            <div className="content">
                <div className="logo">
                    <img src={logo1} alt="capivara" data-aos="zoom-in" />
                    <h1 data-aos="fade-right">goCapiba</h1>
                    <span data-aos="fade-right">
                        Colete moedas capibas e ajude a transformar Recife.
                    </span>
                </div>
                <div className="logins">
                    <Link to="/gocapiba/mapa" className="btns" data-aos="fade-left">
                        Entrar com gov.br
                    </Link>
                    <Link to="/gocapiba/mapa" className="btns" data-aos="fade-left">
                        Entrar com Conecta Login
                    </Link>
                    <Link to="/gocapiba/mapa" className="guestBtn" data-aos="fade-left">
                        Entrar como convidado
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
