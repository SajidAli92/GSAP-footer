import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import "./Footer.css";

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    { name: "Instagram" },
    { name: "LinkedIn" },
    { name: "Dribble" },
    { name: "GitHub" },
    { name: "YouTube" },
    { name: "Behance" },
    { name: "Twitter" },
  ];
  
  useGSAP(()=>{
    gsap.to(".social-link-scroll h5",{
        backgroundColor: "white",
        color:"black",
        repeat:-1,
    })
  })

  useGSAP(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        gsap.to(".marque", {
          x: "-200%",
          duration: 5,
          repeat: -1,
          ease: "none",
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 2,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });


  return (
    <>
      <div id="sideScroller">
        <div id="move">
          {[...Array(5)].map((_, index) => (
            <div className="marque" key={index}>
              <h1>Follow Us</h1>
              <div className="circle"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="social-media-links">
        <h6>Social media contacts</h6>
        <hr />

        {socialLinks.map((link, index) => (
          <div
            key={index}
            className="social-links"
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink === link.name ? (
              <div className="hover-content">
                {[...Array(10)].map((_, i) => (
                  <div className="social-link-scroll" key={i}>
                    <h5>{link.name}</h5> <MdArrowOutward />
                  </div>
                ))}
              </div>
            ) : (
              <div className="social-link">
                <h5>{link.name}</h5> <MdArrowOutward />
              </div>
            )}
            <hr />
          </div>
        ))}
        <hr style={{ borderColor: "white", opacity: 0.5 }} />
      </div>
    </>
  );
}

export default Footer;
