import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../assets/home/a1.png";
import a2 from "../assets/home/a2.jpg";
import a3 from "../assets/home/a3.jpg";
import a4 from "../assets/home/a4.jpg";
import a5 from "../assets/home/a5.jpg";
import left from "../assets/home/arr1.png";
import right from "../assets/home/arr2.png";
import "../style/TestimonialSlider.css";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={right} alt="Next" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <img src={left} alt="Prev" />
    </div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      description: "Joining this platform transformed my networking experience, providing invaluable connections that helped me grow professionally.",
      image: a2
    },
    {
      name: "Akash Rao",
      description: "My confidence has soared thanks to peer feedback. I feel more assured in my career, knowing I have a supportive community.",
      image: a1
    },
    {
      name: "Ajay Gupta",
      description: "This platform has enriched my learning, offering insights and advice that drive my continuous growth.",
      image: a3
    },
    {
      name: "Kshitij Jakhmola",
      description: "I know what to consider when searching for my dream job that fits my personality, the workplace that is the best fit for me.",
      image: a4
    },
    {
      name: "Isha Parakal",
      description: "I'm really happy to have met with you and have talked through my options with you. Thanks for your career advice!",
      image: a5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
         <div key={index} className="endorsement-box">
            <img src={testimonial.image} alt={testimonial.name} className="endorsement-image" />
            <p className="endorsement-text">{testimonial.name}</p>
            <p className="endorsement-description">{testimonial.description}</p>
          
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default TestimonialSlider;
