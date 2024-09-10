'use client'

import React, { useRef, useState, useEffect } from 'react'

const SignUp = () => {
  const [cardStyle, setCardStyle] = useState({});
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 2;
      const middleY = rect.height / 2;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      let rotateY = 0;
      let rotateX = 0;

      if (deltaX > 0) {
        rotateY = -20;  // Rotate to the left
      } else {
        rotateY = 20;   // Rotate to the right
      }

      if (deltaY > 0) {
        rotateX = 20;   // Rotate downwards
      } else {
        rotateX = -20;  // Rotate upwards
      }

      setCardStyle({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle({
        ...cardStyle,
        transform: 'rotateY(0deg) rotateX(0deg)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle]);




  return (
    <section id="sign-up" className="section">

      <div className="cards-section">
        <div className="container">
          <div className="center-title">
            <div className="title-holder">
              <div className="fade-in-move-on-scroll">
                <h1 className="title black-text">Take control of your time with Black!</h1>
              </div>
              <div className="fade-in-move-on-scroll">
                <div className="experience-paragraph-holder">
                  <p className="black-text">Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="cards-grid-holder">

            <div className="cards-grid">


              <div id="w-node-fc8765e5-00fe-9e2a-d8f7-edcc2476991c-5ffe7f77" data-w-id="fc8765e5-00fe-9e2a-d8f7-edcc2476991c" className="card-background">
                <div className="card-container">
                  <div className="card-image-holder _01">
                    <img
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b58b976afec602a1eb0d9e_First%20Card%20Image.svg"
                      loading="eager"
                      alt=""
                      className="card-image"
                    />
                  </div>
                  <div className="card-text-holder">
                    <div className="card-title black-text">Integrations</div>
                    <div className="experience-paragraph-holder">
                      <p className="black-text">Allows the user to track time on the go,</p>
                    </div>
                  </div>
                </div>
              </div>


              <div id="w-node-eb39f325-8859-6038-bc3c-ab144f9640eb-5ffe7f77" className="two-cards-holder">

                <div data-w-id="be56302e-1fa4-fbab-bfdf-1115daa8830e" className="card-background">
                  <div className="card-container _02">
                    <div className="card-text-holder _02">
                      <div className="card-title black-text">Automatic tracking</div>
                      <div className="experience-paragraph-holder _02">
                        <p className="black-text">Automatically track the amount of time spent on different tasks</p>
                      </div>
                    </div>
                    <div className="card-image-holder _02">
                      <img
                        src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5911e1b38e6b13be1acc8_Second%20Card%20Image.svg"
                        loading="lazy"
                        alt=""
                        className="card-image"
                      />
                    </div>
                  </div>
                </div>


                <div data-w-id="747e597c-b48f-be9e-1070-ea3f40f0f06a" className="card-logo-holder">


                  <div data-w-id="e24e52c4-7e25-85b9-f3af-94bdde39da9b" className="card-logo-wrapper"
                    ref={containerRef} style={{ perspective: '1600px' }}
                  >
                    <div className="card-logo-container" style={cardStyle}>
                      <img
                        src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5927955c4817e14c6df3e_Black%20Logo%20Solo.svg"
                        loading="lazy"
                        alt=""
                        className="card-logo"
                      />
                    </div>
                  </div>
                  <div className="card-bg-image-holder">
                    <img
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003.webp"
                      loading="lazy"
                      sizes="(max-width: 767px) 250px, (max-width: 991px) 34vw, (max-width: 1439px) 44vw, 617px"
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003-p-1080.webp 1080w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003-p-1600.webp 1600w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b592296afec69b5ceb8e6d_Card%20Image%2003.webp 1710w"
                      alt=""
                      className="card-bg-image"
                    />
                  </div>

                </div>

              </div>




              <div id="w-node-_5ab5adbc-57c9-c9b0-3c74-19cd092f35c9-5ffe7f77" data-w-id="5ab5adbc-57c9-c9b0-3c74-19cd092f35c9" className="card-background">
                <div className="card-container">
                  <div className="card-text-holder">
                    <div className="card-title black-text">Reports</div>
                    <div className="experience-paragraph-holder">
                      <p className="black-text">The app generates detailed reports.</p>
                    </div>
                  </div>
                  <div className="card-iphone-holder">
                    <div className="iphone-card">
                      <img
                        src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
                        loading="lazy"
                        sizes="269.9921875px"
                        srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefb47917c0cfa0943fc97_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
                        alt=""
                        className="iphone-image"
                      />
                      <div className="iphone-screen">
                        <img
                          src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp"
                          loading="lazy"
                          sizes="245.171875px"
                          srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63aefd2632bfdbf4073fa431_Hero%20Iphone%20Image.webp 729w"
                          alt=""
                          className="iphone-screen-image card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


            <div className="cards-second-grid">
              <div id="w-node-a35a09e7-c458-1b18-3c0b-22d3f8e3b5ec-5ffe7f77" data-w-id="a35a09e7-c458-1b18-3c0b-22d3f8e3b5ec" className="card-background">
                <div className="card-container">
                  <div className="card-image-holder">
                    <img
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5953329eff83236894a16_Group%20tracking.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 29vw, 411.328125px"
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5953329eff83236894a16_Group%20tracking-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5953329eff83236894a16_Group%20tracking-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5953329eff83236894a16_Group%20tracking-p-1080.webp 1080w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b5953329eff83236894a16_Group%20tracking.webp 1480w"
                      alt=""
                      className="simple-card-image"
                    />
                  </div>
                  <div className="card-text-holder">
                    <div className="card-title black-text">Group tracking</div>
                    <div className="experience-paragraph-holder">
                      <p className="black-text">Without the user having to manually start and stop a timer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="w-node-_972c2625-7d91-facb-87ef-fc89102342d5-5ffe7f77" data-w-id="972c2625-7d91-facb-87ef-fc89102342d5" className="card-background">
                <div className="card-container">
                  <div className="card-image-holder">
                    <img
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b59533b541117f3d7dda10_Task%20categorization.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 29vw, 411.3359375px"
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b59533b541117f3d7dda10_Task%20categorization-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b59533b541117f3d7dda10_Task%20categorization-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b59533b541117f3d7dda10_Task%20categorization-p-1080.webp 1080w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b59533b541117f3d7dda10_Task%20categorization.webp 1480w"
                      alt=""
                      className="simple-card-image"
                    />
                  </div>
                  <div className="card-text-holder small">
                    <div className="card-title black-text">Task categorization</div>
                    <div className="experience-paragraph-holder">
                      <p className="black-text">The app allows the user to categorize tasks into different projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="w-node-aa5ee5b0-8a13-ffdb-f51c-ccb42c8c497a-5ffe7f77" data-w-id="aa5ee5b0-8a13-ffdb-f51c-ccb42c8c497a" className="card-background">
                <div className="card-container">
                  <div className="card-image-holder">
                    <img
                      src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b595332d7b572698251bd8_Automatic%20reports.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 29vw, 411.3359375px"
                      srcSet="https://assets.website-files.com/63aee5793ca698452efe7f60/63b595332d7b572698251bd8_Automatic%20reports-p-500.webp 500w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b595332d7b572698251bd8_Automatic%20reports-p-800.webp 800w, https://assets.website-files.com/63aee5793ca698452efe7f60/63b595332d7b572698251bd8_Automatic%20reports.webp 1480w"
                      alt=""
                      className="simple-card-image"
                    />
                  </div>
                  <div className="card-text-holder">
                    <div className="card-title black-text">Automatic reports</div>
                    <div className="experience-paragraph-holder">
                      <p className="black-text">These reports can be exported in a variety of formats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default SignUp
