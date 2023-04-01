import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import '../round ball/Round.css'

import 'aos/dist/aos.css'
export default function Round() {


    useEffect(() => {
        
        Aos.init();
    
    }, [])

  const [displayr, setDisplayr] = useState(false);

     const round = () => {
       if (window.scrollY >= 100) {
         setDisplayr(true);
       } else {
         setDisplayr(false);
       }
     };
     window.addEventListener("scroll", round);
  return (
    <div
      className={displayr ? "roumd_position_1" : "roumd_position"}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <a href="#home">
        <div class="container_sun">
          <span class="sun sunshine"></span>
          <span class="sun">
            <span className='d-flex text-center justify-content-center pt-2 fs-1'>
              <i class="bi bi-arrow-up-circle upa"></i>
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
