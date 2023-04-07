import React, { useRef, useEffect } from "react";
function Card(props) {
  const ImgRef = useRef(null);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("checking img");
        entry.target.src = entry.target.dataset.src;
      }
    });
  };
  const options = () => {};

  const observer = new IntersectionObserver(callback, options);
  useEffect(() => {
    observer.observe(ImgRef.current);
  }, []);

  return (
    <div className="Card text-center">
      <img data-src={props.image} ref={ImgRef} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
