
import React from 'react';
import "./ClientReviews.css";
import OurClients from '../OurClient/Clients';
import { useNavigate } from 'react-router-dom';
const reviews = [
  {
    name: "Bill Gates",
    company: "Microsoft",
    review: "CamelQ provided us with exceptional services that helped scale our business operations. Highly recommend!",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bill_Gates%2C_September_2024.jpg/220px-Bill_Gates%2C_September_2024.jpg",
  },
  {
    name: "Gautam Adani",
    company: "Adani Group",
    review: "The team at CamelQ is incredibly professional, delivering high-quality solutions that drive success.",
    pic: "https://cdn.britannica.com/82/245982-050-982BF8CD/Gautam-Adani-Adani-Group-2012.jpg",
  },
  {
    name: "Elon Musk",
    company: "Tesla",
    review: "CamelQ's innovative approach has made a huge difference to our business. Their solutions are forward-thinking and impactful.",
    pic: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQBBEX9V2qsnrBo4M379B1ZAEryqBM6srYwgPql1_VKErBPZXZCnPVvK0afIXqUsoIZoJN2Inx5VxGeEzg",
  },
  {
    name: "Ratan Tata",
    company: "Tata Group",
    review: "Our experience with CamelQ has been phenomenal. They truly understand the needs of large enterprises.",
    pic: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202410/670774c72a62f-the-half-a-dozen-companies-from-the-tata-group-hold-a-10-per-cent-weightage-on-index-and-have-a-comb-103133530-16x9.jpg?size=948:533",
  },
  {
    name: "Sundar Pichai",
    company: "Google",
    review: "CamelQ is a highly dependable partner for tech solutions. Their work is impeccable and consistently delivers results.",
    pic: "https://www.mathrubhumi.com/image/contentid/policy:1.9984568:1733136082/sundar%20pichai.jpg?$p=4bd471e&f=16x10&w=852&q=0.8",
  },
  {
    name: "Mark Zuckerberg",
    company: "Facebook",
    review: "Working with CamelQ has been a game-changer. They provide tailored solutions that help us stay ahead of the competition.",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/640px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  },
  {
    name: "Satya Nadella",
    company: "Microsoft",
    review: "The team at CamelQ is an excellent partner. Their forward-thinking strategies are invaluable to our growth and innovation.",
    pic: "https://akns-images.eonline.com/eol_images/Entire_Site/202222/rs_1024x759-220302062455-1024-Satya-Nadella-LT-3222-GettyImages-1132133010.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
  },
  {
    name: "Jeff Bezos",
    company: "Amazon",
    review: "CamelQ's approach to problem-solving is remarkable. They focus on outcomes and deliver nothing short of excellence.",
    pic: "https://www.hindustantimes.com/ht-img/img/2024/12/08/550x309/Bezos-Trump-0_1733636250905_1733636265043.jpg",
  },
];

const ClientReviews = () => {
  const navigate=useNavigate();
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 ">
        <div className="container mx-auto text-center mt-5 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:text-blue-600 hover:text-3xl ${index % 2 === 0 ? 'bg-gradient-to-tl from-indigo-400 to-indigo-600' : 'bg-gradient-to-tl from-green-400 to-green-600'}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={review.pic}
                      alt={`${review.company} logo`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
                  </div>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-800 mb-2 transition-all duration-300 hover:text-black">{review.name}</p>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-500 mb-4 transition-all duration-300 hover:text-black">{review.company}</p>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-700 italic transition-all duration-300 hover:text-black">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurClients />
      {/* <ContactUsPage/> */}
     <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Do You Want Our Services?</h2>
        <p className="text-xl">just click on the below button!</p>
        <button className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300" onClick={()=>{
          navigate("/contactusform")
        }}>Contact Us</button>
      </section>
    </>
  );
};

export default ClientReviews;
