"use client"
import React, { useState } from 'react';
import "./style.css";
import { isMobile } from 'react-device-detect';
import { usePathname } from 'next/navigation';



const Header = () => {
   let makePatheName = usePathname();
   const [openMobileNavbar, setopenMobileNavBar] = useState(false)
   console.log(makePatheName)

   let styleNav = {
      transition: 'all 500ms', // Apply transition to all properties, specifying duration
      transform: 'translateY(0px) translateX(0px)' // Set the initial transform
   }
   let onClickNav = {
      width: "350px",
      height: "11472px",
      display: "block",

   }
   const style = {
      WebkitUserSelect: 'text', // Use camelCase for WebKit-prefixed properties
      userSelect: 'text' // Standard property for non-prefixed version
   };

   // const smootFunction = (event) => {
   //    const section = document.getElementById(event);
   //    if (section) {
   //       section.scrollIntoView({ behavior: 'smooth' });
   //    }
   // }


   return (
      <header className='fixed top-[2px] left-0 right-0 m-auto z-[100000000]'>
         <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll="1" data-duration="500" data-doc-height="1">
            <div className="container nav-container">
               <div className="nav-menu-container">
                  <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
                     <img
                        src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aef0ca917c0c177c433ef9_Black%20Logotype.svg"
                        loading="lazy"
                        alt=""
                        className="brand-image"
                     />
                  </a>

                  <nav role="navigation" className="nav-menu w-nav-menu">
                     <div className="nav-link">
                        <div className="nav-link-active-holder">
                           <a href="/#experince" className="nav-link-holder w-inline-block"  >
                              <div className="nav-link-text-holder">
                                 <div className="nav-link-text">Experience</div>
                              </div>
                           </a>
                           <a href="" className="cricle-active-holder w-inline-block"></a>
                        </div>
                        <div className="nav-link-active-holder">
                           <a href="/#integration" className="nav-link-holder w-inline-block">
                              <div className="nav-link-text-holder">
                                 <div className="nav-link-text">Integration</div>
                              </div>
                           </a>
                           <a href="/#integration" className="cricle-active-holder w-inline-block"></a>
                        </div>
                        <div className="nav-link-active-holder">
                           <a href="/#features" className="nav-link-holder w-inline-block w--current">
                              <div className="nav-link-text-holder">
                                 <div className="nav-link-text">Features</div>
                              </div>
                           </a>
                           <a href="/#features" className="cricle-active-holder w-inline-block w--current"></a>
                        </div>
                        <div className="nav-link-active-holder">
                           <a href="/#download" className="nav-link-holder w-inline-block">
                              <div className="nav-link-text-holder">
                                 <div className="nav-link-text">Download</div>
                              </div>
                           </a>
                           <a href="/#download" className="cricle-active-holder w-inline-block"></a>
                        </div>
                     </div>
                     <div className="nav-button-holder">
                        <a href="/#sign-up" className="button navbar-button w-button">Sign up</a>
                     </div>
                  </nav>

                  <div className="menu-button w-nav-button" aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"><div className="center-box"
                     onClick={() => { setopenMobileNavBar(!openMobileNavbar) }}
                  >
                     <img src="https://cdn.prod.website-files.com/63aee5793ca698452efe7f60/63aee5793ca698aa19fe7f75_menu.svg" loading="lazy" alt="" />
                  </div>
                  </div>
               </div>

            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
         </div>
         <>
            {
               isMobile && openMobileNavbar && (
                  <>
                     <nav role="navigation" className="nav-menu w-nav-menu bg-white translate-y-[-12px] justify-center align-middle" style={{ scrollBehavior: "smooth" }}>
                        <div className="nav-link">
                           <div className="nav-link-active-holder">
                              <a href="/#experince" className="nav-link-holder w-inline-block">
                                 <div className="nav-link-text-holder">
                                    <div className="nav-link-text">Experience</div>
                                 </div>
                              </a>
                              <a href="/#experince" className="cricle-active-holder w-inline-block"></a>
                           </div>
                           <div className="nav-link-active-holder">
                              <a href="/#integration" className="nav-link-holder w-inline-block">
                                 <div className="nav-link-text-holder">
                                    <div className="nav-link-text">Integration</div>
                                 </div>
                              </a>
                              <a href="/#integration" className="cricle-active-holder w-inline-block"></a>
                           </div>
                           <div className="nav-link-active-holder">
                              <a href="/#features" className="nav-link-holder w-inline-block w--current">
                                 <div className="nav-link-text-holder">
                                    <div className="nav-link-text">Features</div>
                                 </div>
                              </a>
                              <a href="/#features" className="cricle-active-holder w-inline-block w--current"></a>
                           </div>
                           <div className="nav-link-active-holder">
                              <a href="/#download" className="nav-link-holder w-inline-block">
                                 <div className="nav-link-text-holder">
                                    <div className="nav-link-text">Download</div>
                                 </div>
                              </a>
                              <a href="/#download" className="cricle-active-holder w-inline-block"></a>
                           </div>
                           <div className="nav-button-holder">
                              <a href="/#sign-up" className="button navbar-button w-button">Sign up</a>
                           </div>
                        </div>
                     </nav>
                  </>
               )
            }
         </>
      </header>
   )
}

export default Header
