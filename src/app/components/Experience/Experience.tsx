"use client";
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  //for card-1
  const [cardStyle, setCardStyle] = useState({});
  const [infoStyle, setInfoStyle] = useState({});
  const containerRef = useRef(null);

  //for card-2
  const [cardStyle2, setCardStyle2] = useState({});
  const [infoStyle2, setInfoStyle2] = useState({});
  const containerRef2 = useRef(null);

  //for card-3
  const [cardStyle3, setCardStyle3] = useState({});
  const [infoStyle3, setInfoStyle3] = useState({});
  const containerRef3 = useRef(null);

  //for card-4
  const [cardStyle4, setCardStyle4] = useState({});
  const [infoStyle4, setInfoStyle4] = useState({});
  const containerRef4 = useRef(null);


  useEffect(() => {
    const container = containerRef.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 4;
      const middleY = rect.height / 4;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      let rotateY = 0;
      let rotateX = 0;

      if (deltaX > 0) {
        rotateY = -10;  // Rotate to the left
      } else {
        rotateY = 10;   // Rotate to the right
      }

      if (deltaY > 0) {
        rotateX = 10;   // Rotate downwards
      } else {
        rotateX = -10;  // Rotate upwards
      }

      setCardStyle({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });

      setInfoStyle({
        transform: `rotateY(${rotateY * 0.8}deg) rotateX(${rotateX * 0.8}deg) translateZ(50px)`,
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle({
        ...cardStyle,
        transform: 'rotateY(0deg) rotateX(0deg)',
      });
      setInfoStyle({
        ...infoStyle,
        transform: 'translateZ(50px)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle, infoStyle]);

  //card-2
  useEffect(() => {
    const container = containerRef2.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 4;
      const middleY = rect.height / 4;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      let rotateY = 0;
      let rotateX = 0;

      if (deltaX > 0) {
        rotateY = -10;  // Rotate to the left
      } else {
        rotateY = 10;   // Rotate to the right
      }

      if (deltaY > 0) {
        rotateX = 10;   // Rotate downwards
      } else {
        rotateX = -10;  // Rotate upwards
      }

      setCardStyle2({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });

      setInfoStyle2({
        transform: `rotateY(${rotateY * 0.8}deg) rotateX(${rotateX * 0.8}deg) translateZ(50px)`,
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle2({
        ...cardStyle2,
        transform: 'rotateY(0deg) rotateX(0deg)',
      });
      setInfoStyle2({
        ...infoStyle2,
        transform: 'translateZ(50px)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle2, infoStyle2]);

  //card-3
  useEffect(() => {
    const container = containerRef3.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 4;
      const middleY = rect.height / 4;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      let rotateY = 0;
      let rotateX = 0;

      if (deltaX > 0) {
        rotateY = -10;  // Rotate to the left
      } else {
        rotateY = 10;   // Rotate to the right
      }

      if (deltaY > 0) {
        rotateX = 10;   // Rotate downwards
      } else {
        rotateX = -10;  // Rotate upwards
      }

      setCardStyle3({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });

      setInfoStyle3({
        transform: `rotateY(${rotateY * 0.8}deg) rotateX(${rotateX * 0.8}deg) translateZ(50px)`,
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle3({
        ...cardStyle3,
        transform: 'rotateY(0deg) rotateX(0deg)',
      });
      setInfoStyle3({
        ...infoStyle3,
        transform: 'translateZ(50px)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle3, infoStyle3]);


  //card-4
  useEffect(() => {
    const container = containerRef4.current;

    const getMouseDirection = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X relative to the element
      const y = e.clientY - rect.top;  // Mouse Y relative to the element
      const middleX = rect.width / 4;
      const middleY = rect.height / 4;

      const deltaX = x - middleX;
      const deltaY = y - middleY;

      return { deltaX, deltaY };
    };

    const handleMouseMove = (e) => {
      const { deltaX, deltaY } = getMouseDirection(e, container);

      let rotateY = 0;
      let rotateX = 0;

      if (deltaX > 0) {
        rotateY = -10;  // Rotate to the left
      } else {
        rotateY = 10;   // Rotate to the right
      }

      if (deltaY > 0) {
        rotateX = 10;   // Rotate downwards
      } else {
        rotateX = -10;  // Rotate upwards
      }

      setCardStyle4({
        transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
        width: '100%',
        height: '100%',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });

      setInfoStyle4({
        transform: `rotateY(${rotateY * 0.8}deg) rotateX(${rotateX * 0.8}deg) translateZ(50px)`,
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      setCardStyle4({
        ...cardStyle4,
        transform: 'rotateY(0deg) rotateX(0deg)',
      });
      setInfoStyle4({
        ...infoStyle4,
        transform: 'translateZ(50px)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardStyle4, infoStyle4]);





  return (
    <section id="experince" className="section">

      <div className="container">
        <div className="experience-section">
          <div className="center-title">
            <div className="title-holder">
              <h1 className="title">Experience your product as you create it.</h1>
            </div>
          </div>

          <div className="experience-cards-holder">
            <div className="experience-grid">
              <div id="w-node-_1261dedf-b3c9-2162-53e7-29ae1d8c7955-5ffe7f77" className="experience-wrapper"
                ref={containerRef} style={{ perspective: '1600px' }}
              >
                <div id="w-node-c9a3eb7f-e26e-bb52-e19d-39f848eddb94-5ffe7f77" data-w-id="c9a3eb7f-e26e-bb52-e19d-39f848eddb94"
                  className="experience-card"
                  style={cardStyle}

                >
                  <div data-w-id="3488554c-fe1a-ba8d-8eaa-2749383949b9" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af0aa87013f8781a8f8cbd_Card%20Image%202.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder" style={infoStyle}>
                      <div className="card-title">Effortlessly tracking with Black</div>
                      <div className="experience-paragraph-holder">
                        <p className='mainTexts'>Designed for you, Black is the perfect solution for you and your teams tracking time."</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_8c828c4b-063f-f20f-6482-b138be2c6dbe-5ffe7f77" className="experience-wrapper" ref={containerRef2} style={{ perspective: '1600px' }}>
                <div id="w-node-_7c769986-af35-2c7e-a088-51a92c6e6099-5ffe7f77" className="experience-card" style={cardStyle2}>
                  <div data-w-id="43b2a4ae-f934-5a3a-60ec-4eb6ab66fd07" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder _02">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b541a3408b585cc412150d_Level.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder _02" style={infoStyle2}>
                      <div className="card-title">Save time your time</div>
                      <div className="experience-paragraph-holder">
                        <p>Available on iOS and Android, Black is accessible from any device.</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_7c369291-b38e-0008-5e70-efcc18461d4c-5ffe7f77" className="experience-wrapper" ref={containerRef3} style={{ perspective: '1600px' }}>
                <div id="w-node-_7c369291-b38e-0008-5e70-efcc18461d4d-5ffe7f77" className="experience-card" style={cardStyle3}>
                  <div data-w-id="7c369291-b38e-0008-5e70-efcc18461d4e" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-image-holder smaller">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b5423d3c47704dd913aa4c_Level%2002.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient _02"></div>
                    </div>
                    <div className="experience-card-text-holder _02" style={infoStyle3}>
                      <div className="card-title">Tracking</div>
                      <div className="experience-paragraph-holder">
                        <p>Comes with built-in workflows that create focus and routine.</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="w-node-_7a405be8-0a26-057e-3bd3-7289f3f9886f-5ffe7f77" className="experience-wrapper" ref={containerRef4} style={{ perspective: '1600px' }}>
                <div id="w-node-_7a405be8-0a26-057e-3bd3-7289f3f98870-5ffe7f77" className="experience-card" style={cardStyle4}>
                  <div data-w-id="7a405be8-0a26-057e-3bd3-7289f3f98871" className="light-wrapper-in-front">
                    <div className="light">
                      <div className="light-outside"></div>
                    </div>
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-text-holder padding" style={infoStyle4}>
                      <div className="card-title">Experience seamless tracking</div>
                      <div className="experience-paragraph-holder">
                        <p>Awarded App of the day, Black has been recognized as the top choice for teams and individuals."</p>
                      </div>
                    </div>
                    <div className="experience-card-image-holder">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b543268f521ea5abefbdfa_Visitor%20Insights%2002.webp" loading="lazy" alt="" className="experience-card-image" />
                    </div>
                  </div>
                  <div className="light-wrapper">
                    <div className="light">
                      <div className="light-inside"></div>
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

export default Experience
