import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ClientImg from "../../../assets/images/Client1.png";

function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Ali",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality..",
    },
    {
      id: 2,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Sara",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 3,
      img: `${ClientImg}`,
      flag: "🇬🇧",
      country: "England",
      author: "John",
      para: "Working with Nuexus has been a game-changer for our business. Their development team took the time to understand our goals and delivered a robust, scalable app that perfectly meets our needs. The team's commitment to excellence and timely communication set them apart from other agencies.",
    },
    {
      id: 4,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Fatima",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 5,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Zara",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 6,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Usman",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality..",
    },
    {
      id: 7,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Hassan",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 8,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Maryam",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 9,
      img: `${ClientImg}`,
      flag: "🇬🇧",
      country: "England",
      author: "David",
      para: "Working with Nuexus has been a game-changer for our business. Their development team took the time to understand our goals and delivered a robust, scalable app that perfectly meets our needs. The team's commitment to excellence and timely communication set them apart from other agencies.",
    },
    {
      id: 10,
      img: `${ClientImg}`,
      flag: "🇺🇸",
      country: "USA",
      author: "Sophia",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 11,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Rayan",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
    {
      id: 12,
      img: `${ClientImg}`,
      flag: "🇵🇰",
      country: "Pakistan",
      author: "Anaya",
      para: "The team at Nuexus exceeded our expectations. Their expertise in web development and agile methodology helped us launch our platform ahead of schedule without compromising on quality.",
    },
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(testimonialData, 6);

  const TestimonialCard = ({ img, flag, country, author, para, big }) => (
    <div
      className={`bg-white p-6 rounded shadow border ${big ? "h-72" : "h-48"}`}
    >
      <div className="flex items-center gap-6 mb-2">
        <img src={img} alt={author} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">
            {flag} {country}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-sm">“{para}”</p>
    </div>
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-12 px-4 md:px-18">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold text-center text-3xl mb-12"
        >
          <h2 className="text-black">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="px-4"
            arrows={false}
            showDots={false}
          >
            {slides.map((group, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <TestimonialCard {...group[0]} />
                  </motion.div>
                  <TestimonialCard {...group[1]} />
                </div>
                <div className="flex flex-col gap-4">
                  <TestimonialCard {...group[2]} big />
                  <TestimonialCard {...group[3]} />
                </div>
                <div className="flex flex-col gap-4">
                  <TestimonialCard {...group[4]} />
                  <TestimonialCard {...group[5]} />
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
