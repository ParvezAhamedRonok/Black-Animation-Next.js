"use client"
import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect';

const Integration = () => {
  const containerRef = useRef(null);
  const imagemove = useRef(null);

  //card ref itmes...
  const ImgRotate1 = useRef(null);
  const ImgRotate2 = useRef(null);
  const ImgRotate3 = useRef(null);
  const ImgRotate4 = useRef(null);
  const ImgRotate5 = useRef(null);
  const ImgRotate6 = useRef(null);
  const ImgRotate7 = useRef(null);

  //cards states...
  const [cardStyle1, setCardStyle1] = useState({});
  const [cardStyle2, setCardStyle2] = useState({});
  const [cardStyle3, setCardStyle3] = useState({});
  const [cardStyle4, setCardStyle4] = useState({});
  const [cardStyle5, setCardStyle5] = useState({});
  const [cardStyle6, setCardStyle6] = useState({});
  const [cardStyle7, setCardStyle7] = useState({});

  // let cardsArray = [
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer2 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   },
  //   {
  //     imageComtaimer1 : ImgRotate1,
  //     cardStyle1 :cardStyle1

  //   }
  // ]






  //move mobile image by scrolling.............
  useEffect(() => {
    const scrollableDiv = document.getElementById("integration");
    let imageScrollBarPosition = document.getElementById("imageScrollBarPosition")
    let topPosition = 0;
    let element = scrollableDiv;

    // Accumulate the offsetTop up the chain
    while (element) {
      topPosition += element.offsetTop;
      element = element.offsetParent;
    }

    window.addEventListener("scroll", function () {
      let makeScrollInImage;
      let offset = window.pageYOffset;
      if (offset >= topPosition) {
        makeScrollInImage = (offset - (topPosition + 200));
      }
      if (isMobile) {
        if (makeScrollInImage >= 5) {
          imageScrollBarPosition.style.transform = `translateY(0px)`;
        } else {
          imageScrollBarPosition.style.transform = `translateY(${-makeScrollInImage}px)`;
        }
      } else {
        if (makeScrollInImage >= 25) {
          imageScrollBarPosition.style.transform = `translateY(0px)`;
        } else {
          imageScrollBarPosition.style.transform = `translateY(${-makeScrollInImage}px)`;
        }
      }
    });

  }, [])


  //shake all images in mouse cursur....
  useEffect(() => {
    const container = containerRef.current;
    const imageMove = imagemove.current;

    setTimeout(() => {
      function getMouseDirection(e, element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the element
        const middleX = rect.width / 4;
        return x - middleX;
      }

      function handleMouseMove(e) {
        const deltaX = getMouseDirection(e, container);
        // Move text left or right based on mouse movement
        // alert(deltaX / 13)
        if (imageMove) {
          imageMove.style.position = 'absolute';
          imageMove.style.top = '34%';
          imageMove.style.left = '51%';
          imageMove.style.transition = ".8 ease-in-out"
          imageMove.style.transform = `translate(-50%, -50%) translateX(${-(deltaX / 50)}px)`; // Adjust movement strength as needed
        }
      }

      function handleMouseLeave() {
        // Reset text position on mouse leave
        if (imageMove) {
          imageMove.style.transform = `translate(-50%, -50%)`;
        }
      }

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, 1800);
  }, []);





  //card- 1 rotating codes..............
  useEffect(() => {
    const container = ImgRotate1.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle1({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle1({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle1]);  // Empty dependency array

  //card- 2 rotating codes..............
  useEffect(() => {
    const container = ImgRotate2.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle2({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle2({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle2]);  // Empty dependency array

  //card- 3 rotating codes..............
  useEffect(() => {
    const container = ImgRotate3.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle3({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle3({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle3]);  // Empty dependency array

  //card- 4 rotating codes..............
  useEffect(() => {
    const container = ImgRotate4.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle4({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle4({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle4]);  // Empty dependency array

  //card- 5 rotating codes..............
  useEffect(() => {
    const container = ImgRotate5.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle5({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle5({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle5]);  // Empty dependency array

  //card- 6 rotating codes..............
  useEffect(() => {
    const container = ImgRotate6.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle6({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle6({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle6]);  // Empty dependency array

  //card- 7 rotating codes..............
  useEffect(() => {
    const container = ImgRotate7.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;  // Center of the element
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      // Adjust rotation based on mouse position
      const rotateY = (-deltaX / 2).toFixed(2);  // Adjust sensitivity
      const rotateX = (deltaY / 2).toFixed(2);

      setCardStyle7({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        transition: 'transform 0.2s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle7({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle7]);  // Empty dependency array







  return (
    <section id="integration" className="section">

      <div data-w-id="c78f219d-acfe-cf0c-7273-cb7eb8df08a1" className="effortlessly-integration-section" ref={containerRef}>
        <div className="container">
          <div className="effortlessly-integration-container">
            <div className="center-title">
              <div className="title-holder">
                <div className="fade-in-move-on-scroll">
                  <h1 className="title">Effortlessly integration</h1>
                </div>
                <div className="fade-in-move-on-scroll">
                  <div className="experience-paragraph-holder">
                    <p>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="effortlessly-integration-wrapper overflow-hidden " >
          <div className="iphone-holder-effortlessly-integration">
            <div className="effortlessly-integration---iphone-holder translate-y-[200px]" id='imageScrollBarPosition'>
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
                loading="eager"
                sizes="(max-width: 479px) 200px, (max-width: 991px) 319.9921875px, 429.9921875px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
                alt=""
                className="iphone-image"
              />
              <div className="iphone-screen">
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp"
                  loading="eager"
                  alt=""
                  sizes="390.453125px"
                  srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp 729w"
                  className="iphone-screen-image"
                />
              </div>
              <div className="iphone-drop-shadow low"></div>
            </div>
          </div>
          <div className="logo-holder-effortlessly-integration" ref={imagemove} >
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate1} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle1} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image cursor-pointer w-[300px]"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate2} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle2} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b111e716be949163b3_Logo%2002.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b111e716be949163b3_Logo%2002.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate3} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle3} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b03a6a5b6b9ad808b9_Logo%2004.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b03a6a5b6b9ad808b9_Logo%2004.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate4} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle4} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0ef6aafb872f476c0_Logo%2003.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0ef6aafb872f476c0_Logo%2003.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate5} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle5} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0fcbe5256623e55f9_Logo%2005.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b0fcbe5256623e55f9_Logo%2005.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate6} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle6} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b113a7d9a90ffb2406_Logo%2001.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
            <div className='w-full h-full justify-center align-middle' ref={ImgRotate7} style={{ perspective: '1000px' }}>
              <div className="logo-holder" style={cardStyle7} >
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b1077974fadc0c776c_Logo%2006.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image"
                />
                <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b547b1077974fadc0c776c_Logo%2006.svg"
                  loading="lazy"
                  alt=""
                  className="logo-image blured"
                />
              </div>
            </div>
          </div>
          <div className="light-holder"></div>
          <div className="workflow-section">
            <div className="fade-in-move-on-scroll">
              <div className="card-title">Integrates with your workflow do need to change</div>
            </div>
            <div className="fade-in-move-on-scroll">
              <div className="experience-paragraph-holder">
                <p>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>


      </div>


    </section>
  )
}

export default Integration
