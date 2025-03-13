import React from "react";
import './Header.css';
import photo from '../../assets/photo.jpg';

function Header(){
    return (
        <div className="header">
            <div className="profile-content">
                <img src={photo} alt="foto de perfil" />
                <div className="info">
                    <h3>Ana</h3>
                    <span>Nível filhote</span>
                </div>
            </div>
            <div className="cash">
                <h3>Saldo capiba</h3>
                <span>C$237</span>
            </div>
        </div>
    )
}

export default Header;