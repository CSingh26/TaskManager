import React, { useContext, useEffect, useRef } from "react";
import Navbar from '../components/Navbar';
import { UserContext } from "../context/userContext";
import './userProfile.css';
import userAvatar from '../assests/Screenshot 2024-03-22 at 10.44.14.png';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const cardRef = useRef(null);

    const tiltEffectSettings = {
        max: 20,
        perspective: 1000,
        scale: 1.1,
    };

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const cardMouseEnter = () => {
            setTransition();
        };

        const cardMouseMove = (event) => {
            if (document.querySelector('.nav-menu').classList.contains('active')) {
                return;
            }

            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const centerX = card.offsetLeft + cardWidth / 2;
            const centerY = card.offsetTop + cardHeight / 2;
            const mouseX = event.clientX - centerX;
            const mouseY = event.clientY - centerY;
            const rotateX = ((-1) * tiltEffectSettings.max * mouseY / (cardHeight)).toFixed(2);
            const rotateY = ((-1) * tiltEffectSettings.max * mouseX / (cardWidth)).toFixed(2);

            card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg)
                                                rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, 
                                                ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
        };

        const cardMouseLeave = () => {
            card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) 
                                    scale3d(1, 1, 1)`;
            setTransition();
        };

        const setTransition = () => {
            card.style.transition = "transform 750ms cubic-bezier(.03,.98,.52,.99)";
            setTimeout(() => {
                card.style.transition = "";
            }, 750);
        };

        card.addEventListener("mousemove", cardMouseMove);
        card.addEventListener("mouseenter", cardMouseEnter);
        card.addEventListener("mouseleave", cardMouseLeave);

        return () => {
            card.removeEventListener("mousemove", cardMouseMove);
            card.removeEventListener("mouseenter", cardMouseEnter);
            card.removeEventListener("mouseleave", cardMouseLeave);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <div ref={cardRef} className="user-card">
                <img className="user-avatar" alt="user-avatar" src={userAvatar}></img>
                <div className="user-details">
                    <h3 className="username-label" id="label">Username</h3>
                    <h4 className="username" id="input">{user?.userName}</h4>
                    <br />
                    <h3 className="email-label" id="label">Email-Id</h3>
                    <h4 className="emailId" id="input">{user?.email}</h4>
                    <br />
                    <h3 className="memSince-label" id="label">Member Since</h3>
                    <h4 className="memSince" id="input">26th March, 2024</h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
