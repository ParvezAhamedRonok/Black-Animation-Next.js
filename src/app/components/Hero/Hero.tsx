'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react';
import "./style.css"
import { isMobile } from 'react-device-detect';

// Hero Section 
const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imagemove = useRef(null)


  //make effects in mobile image & texts ...
  React.useEffect(() => {
    document.getElementById("makeEffectInto-left-Text")?.classList.add("makeEffectIntoText");
    document.getElementById("makeEffectInto-right-Text")?.classList.add("makeEffectIntoText-2");

    setTimeout(() => {
      let textfontSize = document.getElementById("meedtextone");
      let textfontSize2 = document.getElementById("meedtextone2")
      textfontSize.style.fontSize = "14vw";
      textfontSize2.style.fontSize = "14vw"
      document.getElementById("imageId-forRemove-hiddhen")?.classList.remove("hidden");
      document.getElementById("imageId-forRemove-hiddhen2")?.classList.remove("hidden")
      document.getElementById("hiddenImageComesFromDown")?.classList.add("imageId-forRemove-hiddhenmain")
    }, 1200);
  }, [])




//for effecting in mobile & background-text in mouse move
  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const imageMove = imagemove.current;

    setTimeout(() => {
      function getMouseDirection(e, element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the element
        const middleX = rect.width / 3;
        return x - middleX;
      }

      function handleMouseMove(e) {
        const deltaX = getMouseDirection(e, container);
        // Move text left or right based on mouse movement
        // alert(deltaX / 13)
        console.log(deltaX);

        if (text) {
          container.style.transition = "all 0.9s ease-in"
          text.style.position = 'absolute';
          text.style.top = '70.5%';
          text.style.left = '50%';
          imageMove.style.position = 'absolute';
          imageMove.style.top = '71%';
          imageMove.style.left = '50%';
          text.style.transform = `translate(-50%, -50%) translateX(${-(deltaX / 40)}px)`; // Adjust movement strength as needed
          imageMove.style.transform = `translate(-50%, -50%) translateX(${deltaX / 40}px)`;
        }
      }

      function handleMouseLeave() {
        // Reset text position on mouse leave
        if (text) {
          text.style.transform = `translate(-50%, -50%)`;
          imageMove.style.transform = `translate(-50%, -50%)`;
          container.style.transition = "all 0.9s ease-out"
        }
      }

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, 3300);
  }, []);



  return (
    <section data-w-id="bbb1681c-62a0-7375-a529-1c7bec5a4a0e" className="section  pt-[30px]" ref={containerRef}
      style={{ transition: "all 0.8 ease-in-out" }}
    >

      <div className='container no-paddings ' id='container'>

        <div className='hero-section'>
          <div className="hero-section-text-holder transition-all ease-in-out duration-500">
            <div className="hero-section-sticky" >
              <div className="hero-sticky-holder" id='transformatedText'>
                <div className="hero-text-holder" ref={textRef} >
                  <div className="hero-text-wrapper _01" id='makeEffectInto-left-Text'>
                    <div className="hero-text transition-all ease-in-out duration-500" id="meedtextone">Meet</div>
                    <div className="hero-text-blur">Meet</div>
                  </div>
                  <div className="hero-text-wrapper _02" id='makeEffectInto-right-Text'>
                    <div className="hero-text _02  transition-all ease-in-out duration-500" id="meedtextone2">Black</div>
                    <div className="hero-text-blur ">Black</div>
                  </div>
                </div>
              </div>

            </div>

            <div className="iphone-holder" id='hiddenImageComesFromDown' ref={imagemove}>
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
                loading="lazy"
                sizes="(max-width: 767px) 196.6796875px, 295.015625px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
                alt=""
                id='imageId-forRemove-hiddhen'
                className="iphone-image hidden"
              />
              <div className="iphone-screen">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 80vw, 267.875px"
                  srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp 729w"
                  className="iphone-screen-image hidden"
                  id='imageId-forRemove-hiddhen2'
                />
              </div>
              <div className="iphone-drop-shadow"></div>
            </div>

          </div>

          <div className="hero-section-paragraph-holder">
            <div className="hero-paragraph-holder" id='onScrollPosition'>
              <p>Effortlessly track and manage your time with Black. Customizable reports, invoicing, and integrations make it the perfect tool for freelancers and professionals.</p>
            </div>
            <div className="from-wra-er" >

              <div className="form-block w-form" >
                <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="63aee5793ca698e95ffe7f77" data-wf-element-id="5ea415ca-a921-34a0-1f6c-2725653f3203" aria-label="Email Form">
                  <div className="from-holder">
                    <input className="text-field-form w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Enter Your Email" type="email" id="email-2" required="" />
                    <input type="submit" data-wait="Please wait..." className="button from w-button" value="Start Free Trial" />
                  </div>
                </form>
                <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-grid-holder" id='imageTransform'>
          <div className="w-layout-grid logo-grid">
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcd8-5ffe7f77"
              className="logo-small-container"
            >
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dceb85a1104ee0c8f5_Logo01.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcda-5ffe7f77"
              className="logo-small-container">
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc67bbed2fe0724574_Logo02.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcdc-5ffe7f77"
              className="logo-small-container">
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dccee58c6ac31a1ff8_Logo03.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dcde-5ffe7f77"
              className="logo-small-container">
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc892ff685649d683b_Logo04.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce0-5ffe7f77"
              className="logo-small-container"
            >
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc3ca6982d5900e42a_Logo05.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce2-5ffe7f77"
              className="logo-small-container"
            >
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc0e332ae5dc9fe5e4_Logo06.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce4-5ffe7f77"
              className="logo-small-container">
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dcf706a1a426eb3608_Logo07.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
            <div
              id="w-node-f078fdf9-afcd-dd23-e056-d7d58c77dce6-5ffe7f77"
              className="logo-small-container"
            >
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af02dc7013f86c8f8ee7f0_Logo08.svg"
                loading="lazy"
                alt=""
                className="logo-small"
              />
            </div>
          </div>

          <div className="fade-in-move-on-scroll" >
            <p>Trusted by Top-tier product campanies</p>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Hero
