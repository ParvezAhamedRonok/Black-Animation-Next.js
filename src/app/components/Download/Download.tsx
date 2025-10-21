"use client";
import React, { useEffect } from 'react'
import "./style.css";
import { isMobile } from 'react-device-detect';
import MobileViewCom from "./mobileView.js"


const Download = () => {

  useEffect(() => {
    let scrollableDiv = document.getElementById("mainDivPositionget");
    let mainPositionSet = document.getElementById("stickyImagePositin");
    let shadowInTexts = document.getElementById("shadowInTexts")


    let topPosition = 0;
    let element = scrollableDiv;

    // Accumulate the offsetTop up the chain
    while (element) {
      topPosition += element.offsetTop;
      element = element.offsetParent;
    }
    console.log('Position from top:', topPosition);

    window.addEventListener("scroll", function () {
      let makeScrollInImage;
      let offset = window.pageYOffset;
      console.log(offset)

      if (isMobile) {
        if (offset > topPosition) {
          mainPositionSet?.classList.add("stickyForMObile");
          makeScrollInImage = (offset - (topPosition + 50));
        }
      } else {
        if (offset > (topPosition + 250)) {
          mainPositionSet?.classList.add("sticky")
          makeScrollInImage = (offset - (topPosition + 50));
          // bgColor = window.getComputedStyle(div).backgroundColor;
        }
      }
    });
  }, [])





  return (
    <section id="download" className="section">

      <div className="container">
        <div className="effortlessly-integration-container">
          <div className="center-title">
            <div className="title-holder">
              <div className="fade-in-move-on-scroll">
                <h1 className="title">Start using Black now</h1>
              </div>
              <div className="fade-in-move-on-scroll">
                <div className="experience-paragraph-holder">
                  <p>Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="download-badge-holder">
            <div className="download-badge-container">
              <a href="http://applestore.com" target="_blank" className="download-badge-button w-inline-block">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b55c334fd227405569f74b_App%20Store%20badge.svg"
                  loading="lazy"
                  alt=""
                  className="download-badge-image"
                />
              </a>
              <a href="http://googleplay.com" target="_blank" className="download-badge-button w-inline-block">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b55c347e2c7082fffff214_Mobile%20App%20Store%20Badge.svg"
                  loading="lazy"
                  alt=""
                  className="download-badge-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[230vh] relative'>
        <div className='w-full h-full absolute top-0 left-0 bottom-0 right-0'>
          <div className='w-full h-[42%] bg-black'>

          </div>
          <div className='w-full h-[60%] bg-white'>

          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 grid justify-center" id='stickyImagePositin'>
          < div className=" translate-y-[-5px] relative" >
            <div className='' id='getImageBackgroundCOlorName'>
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp"
                loading="eager"
                sizes="(max-width: 479px) 300px, 400px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w"
                alt=""
                className="dark-mode-hand"
              />
              <div className="dark-mode-app-holder overflow-hidden">
                <MobileViewCom />
              </div>
            </div>
          </div >
        </div>
      </div>

    </section>
  )
}

export default Download

