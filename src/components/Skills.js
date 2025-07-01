import meter1 from "../assets/img/html1.png";
import meter2 from "../assets/img/css.jpg";
import meter3 from "../assets/img/javascript.svg";
import meter4 from "../assets/img/C++.png";
import meter5 from "../assets/img/mysql.svg";
import meter6 from "../assets/img/react.png";
import meter7 from "../assets/img/tailwind.png";
import meter8 from "../assets/img/nextjs.png";
import meter9 from "../assets/img/nodejs.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Outlined below are my key skills and areas of expertise.<br></br> Each reflects my passion for delivering efficient and effective solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                             <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div> 
                             <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                          <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>C++</h5>
                            </div>
                             <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>MYSQL</h5>
                            </div>
                             <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                           <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>TAILWIND</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>NEXTJS</h5>
                            </div>
                             <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>NODE JS</h5>
                            </div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
