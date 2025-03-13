import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './Navbar.css';
import homeIcon from '../../assets/home.png';
import mapIcon from '../../assets/map.png';
import swordsIcon from '../../assets/swords.png';
import userIcon from '../../assets/user.png';
import marketIcon from '../../assets/market.png';

function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <nav>
            <Link to="/">
                <img className="icons" src={homeIcon} alt="home" />
            </Link>
            <Link to="/gocapiba/mapa">
                <img className="icons" src={mapIcon} alt="mapa" />
            </Link>
            <Link to="/gocapiba/desafios">
                <img className="icons" src={swordsIcon} alt="desafios" />
            </Link>
            <Link to="/gocapiba/loja">
                <img className="icons" src={marketIcon} alt="loja" />
            </Link>
            <Link to="/gocapiba/perfil">
                <img className="icons" src={userIcon} alt="perfil" />
            </Link>
        </nav>
    )
}

export default Navbar;
