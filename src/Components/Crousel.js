import React from 'react'

import "./Crousel.css"
import { useEffect,useState,useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import Flite from '../pages/Flite';




   
    function Crousel() {
        const colors = ["https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1534418984967-a2b9c7f3f0d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1583608562793-69ac7670dd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1580188712482-63ce8922d28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
"https://images.unsplash.com/photo-1621909321963-2276c9660298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1217&q=80",
"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",        "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1256&q=80"];
        const delay = 2500;
        const [index, setIndex] = useState(0);
        const timeoutRef = useRef(null);
        const navigate = useNavigate();
         const goHotels=()=>{
             navigate("../flite");
         }

        function resetTimeout() {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        useEffect(() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                    ),
                delay
            );

            return () => {
                resetTimeout();
            };
        }, [index]);

  return (
    <div>
          <div className="slideshow">
              <div
                  className="slideshowSlider"
                  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                  {colors.map((index) => (
                    
                      <img src={index} 
                          className="slide"
                          key={index}
                          style={{cursor:'pointer'}}
                          onClick={goHotels}
                          
                      />
                  ))}
              </div>

              <div className="slideshowDots">
                  {colors.map((_, idx) => (
                      <div
                          key={idx}
                          className={`slideshowDot${index === idx ? " active" : ""}`}
                          onClick={() => {
                              setIndex(idx);
                          }}
                      ></div>
                  ))}
              </div>
          </div>
    </div>
  )
}


export default Crousel;