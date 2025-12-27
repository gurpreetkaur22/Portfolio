import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import avatar from '../assets/avatarrrr.png'
// import express from "../assets/icons8-express-js.png"
// import react from "../assets/icons8-react.png"
// import mongodb from "../assets/icons8-mongodb.png"
// import node from "../assets/icons8-node-js.png"
// import tailwind from "../assets/icons8-tailwind-css.png"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    useEffect(() => {
        gsap.fromTo(".hero-text", { x: 0 }, {
            x: -150,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
        gsap.fromTo(".hero-image", { x: 0 }, {
            x: 150,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }, []);

    return (
        <>
        <div id='hero' className='h-screen overflow-hidden w-full flex items-center justify-center pl-40'>
            <div className='hero-text w-full flex flex-col'>
                <h1 className='-mb-10 mt-10 nunito text-3xl'>Hello, I am a</h1>
                <div className='w-full flex flex-col'>
                    <h1 className='bbh-bogle-regular text-[10rem] tracking-wide  text-left -mb-20'>MERN Stack</h1>
                    <br />
                    <h1 className='jersey-15-charted-regular text-[12rem] text-accent text-right pr-5 underline'>DEVELOPER.</h1>
                </div>
            </div>
            <div className='hero-image flex flex-col justify-center items-center pr-40 gap-5'>
                <div className='rounded-4xl bg-alt overflow-hidden '>
                    <img className='w-3xl translate-y-16' src={avatar} alt="" />
                </div>
                <h1 className='nunito-bold text-4xl tracking-tighter'>
                    GURPREET KAUR</h1>
            </div>
            {/* <img src={express} className='absolute w-15 h-15 left-20 top-120 opacity-50' alt="" />
            <img src={react} className='absolute w-15 h-15 left-120 top-30 opacity-50' alt="" />
            <img src={mongodb} className='absolute w-15 h-15 left-220 top-50 opacity-50' alt="" />
            <img src={node} className='absolute w-15 h-15 left-60 bottom-25 opacity-50' alt="" />
            <img src={tailwind} className='absolute w-15 h-15 left-160 bottom-15 opacity-50' alt="" /> */}
        </div>
        <div className="hero-end bottom-0"></div>
        </>
    )
}

export default Hero