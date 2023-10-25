
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import img_1 from "../../../../public/images/built.png";
import img_2 from "../../../../public/images/desai.png";
import img_3 from "../../../../public/images/catalyst.png";



const Incabution = () => {
  return (
    <div className={styles.container}>
      <h1>OUR INCUBATORS</h1>
      {/* <div className={styles.cards}>
            <Image src={img_1} width={300}  alt='img' />
            <Image src={img_2} width={300} height={200} alt='img' />
            <Image src={img_3} width={300} alt='img'  />
        </div> */}

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image src={img_1} width={300} alt='img' />
    </div>
    <div className="carousel-item">
    <Image src={img_2} width={300} height={200} alt='img'  />
    </div>
    <div className="carousel-item">
    <Image src={img_2} width={300} height={200} alt='img'  />
    </div>
  </div>
</div>



     
    </div>
  )
}

export default Incabution;

// "use client"; 
// import React, { useEffect } from 'react';
// import styles from "./style.module.css";
// import Image from 'next/image';
// import img_1 from "../../../../public/images/built.png";
// import img_2 from "../../../../public/images/desai.png";
// import img_3 from "../../../../public/images/catalyst.png";
// import { Carousel } from 'bootstrap';

// const Incubation = () => {
//   useEffect(() => {
   
//     const myCarousel = new Carousel(document.getElementById('carouselExample'));

//     return () => {
     
//       myCarousel.dispose();
//     };
//   }, []); 

//   return (
//     <div className={styles.container}>
//       <h1>OUR INCUBATORS</h1>

//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src={img_1}
              
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src={img_2}
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src={img_3}
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Incubation;





