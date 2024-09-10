"use client";
import React, { useEffect } from 'react'
// import { MessageCircleMore } from 'lucide-react'
import "./style.css";
import SomeImage from "../../../../public/images/63b595332d7b572698251bd8_Automatic reports.webp"
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

const Download = () => {
  useEffect(() => {
    let scrollableDiv = document.getElementById("mainDivPositionget");
    // let imageScrollBarPosition = document.getElementById("imageScrollBarPositionForDownLoad");
    // let mainPositionSet = document.getElementById("stickyImagePositin");
    let mainPositionSet = document.getElementById("stickyImagePositin");

    let topPosition = 0;
    let element = scrollableDiv;

    // Accumulate the offsetTop up the chain
    while (element) {
      topPosition += (element as HTMLElement).offsetTop;
      element = (element as HTMLElement).offsetParent;
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
          // imageScrollBarPosition.style.top = `${-makeScrollInImage}px`;
          // mainPositionSet.style.position = "sticky";
          // mainPositionSet.style.top = `100px`
          // mainPositionSet.style.left = "50%"
          // mainPositionSet.style.background = "red"
        }
      } else {
        if (offset > (topPosition + 250)) {
          mainPositionSet?.classList.add("sticky")
          makeScrollInImage = (offset - (topPosition + 50));
          // imageScrollBarPosition.style.top = `${-makeScrollInImage}px`;
          // mainPositionSet.style.position = "sticky";
          // mainPositionSet.style.top = `100px`
          // mainPositionSet.style.left = "50%"
          // mainPositionSet.style.background = "red"
        }
      }
      // imageScrollBarPosition.style.top = `${-makeScrollInImage}px`
      console.log(makeScrollInImage)
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
            <div className=''>
              <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp"
                loading="eager"
                sizes="(max-width: 479px) 300px, 400px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w"
                alt=""
                className="dark-mode-hand"
              />
              <div className="dark-mode-app-holder">
                <img
                src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp"
                loading="eager"
                alt=""
                sizes="232px"
                srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp 1035w"
                className="dark-mode-app"
              />
                {/* <img
                  src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp"
                  loading="eager"
                  alt=""
                  sizes="232px"
                  srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp 1036w"
                  className="dark-mode-app"
                /> */}

              </div>
            </div>
          </div >
        </div>
      </div>




    </section>
  )
}

export default Download







// < div className = "dark-mode-hand-holder translate-y-[-50px]" id = 'stickyImagePositin ' >
//             <img
//               src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp"
//               loading="eager"
//               sizes="(max-width: 479px) 300px, 400px"
//               srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w"
//               alt=""
//               className="dark-mode-hand"
//             />
//             <div className="dark-mode-app-holder relative">
//               {/* <img
//                 src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp"
//                 loading="eager"
//                 alt=""
//                 sizes="232px"
//                 srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp 1035w"
//                 className="dark-mode-app"
//               /> */}
//               <img
//                 src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp"
//                 loading="eager"
//                 alt=""
//                 sizes="232px"
//                 srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp 1036w"
//                 className="dark-mode-app"
//               />

//             </div>
//           </div >




// <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' id='imageScrollBarPositionForDownLoad'>
//         <div className='w-full full bg-black grid justify-center align-middle m-auto'>

//         </div>
//       </div>
//       <div className='absolute top-0 left-0 right-0 bottom-0 z-[1] '>
//         <div className='w-full h-full bg-white grid justify-center align-middle sticky'>
//           {/* <div className="dark-mode-hand-holder translate-y-[-50px]">
//             <img
//               src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp"
//               loading="eager"
//               sizes="(max-width: 479px) 300px, 300px"
//               srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w"
//               alt=""
//               className="dark-mode-hand "
//             />
//             <div className="dark-mode-app-holder">
//               <img
//                 src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp"
//                 loading="eager"
//                 alt=""
//                 sizes="232px"
//                 srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp 1036w"
//                 className="dark-mode-app"
//               />
//             </div>
//           </div> */}
//           {/* <div className="dark-mode-hand-holder translate-y-[-50px]" id='stickyImagePositin '>
//             <img
//               src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp"
//               loading="eager"
//               sizes="(max-width: 479px) 300px, 400px"
//               srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5761b8fb633b42f3ad6c4_Iphone%20In%20Hand.webp 848w"
//               alt=""
//               className="dark-mode-hand"
//             />
//             <div className="dark-mode-app-holder relative">
//               <img
//                 src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp"
//                 loading="eager"
//                 alt=""
//                 sizes="232px"
//                 srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b576894fd22717696b9ead_Dark%20Mode.webp 1035w"
//                 className="dark-mode-app"
//               />
//               <img
//                 src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp"
//                 loading="eager"
//                 alt=""
//                 sizes="232px"
//                 srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b57689b7dd5c5baa9e0780_Light%20Mode.webp 1036w"
//                 className="dark-mode-app"
//               />

//             </div>
//           </div> */}
//         </div>
//       </div>