
import React from 'react';

const Branches = () => {
  const branches = [
    { city: 'Hyderabad', country: 'India', pic: 'https://media.istockphoto.com/id/479842074/photo/empty-road-at-building-exterior.jpg?s=612x612&w=0&k=20&c=SbyfZGN0i2O_QPLCdBcu9vhuzbQvTz4bGEn-lIzrN0E=', address: 'H.NO 10-1-55/A,Saroornagar ,Hyderabad,, Telangana', isHeadOffice: true },
    { city: 'Mumbai', country: 'India', pic: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600', address: 'Mumbai, Maharashtra', isHeadOffice: false },
    { city: 'Chennai', country: 'India', pic: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', address: 'Chennai, Tamil Nadu', isHeadOffice: false },
    { city: 'Bengulure', country: 'India', pic: 'https://images.pexels.com/photos/15497599/pexels-photo-15497599/free-photo-of-modern-residential-building.jpeg?auto=compress&cs=tinysrgb&w=600', address: 'Bengulure,karnataka', isHeadOffice: false },
    { city: 'London', country: 'UK', pic: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=600', address: 'London, England', isHeadOffice: false },
    { city: 'New York', country: 'USA', pic: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg', address: 'New York, NY', isHeadOffice: false },
    { city: 'Toronto', country: 'Canada', pic: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600', address: 'Toronto, Ontario', isHeadOffice: false },
  ];

  return (
    <>
      <section
        id="branches"
        className="py-16 bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300 min-h-screen"
      >
        <h2 className="text-center  mt-5 font-bold text-4xl text-gray-800 mb-4">
          Our Branches
        </h2>

        {/* Head Office Section (Hyderabad) */}
        <div className="mb-12">
          <h3 className="text-3xl text-center mb-4 font-bold text-blue-600">
            Head Office - Hyderabad
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {branches
              .filter((branch) => branch.isHeadOffice)
              .map((branch, index) => (
                <div
                  key={index}
                  className={`max-w-md bg-cyan-600 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform ${
                    index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={branch.pic}
                      alt={`${branch.pic} flag`}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 text-gray-900">
                    {branch.city}
                  </h4>
                  <p className="text-center text-gray-900 text-sm sm:text-base">{branch.address}</p>
                </div>
              ))}
          </div>
        </div>

        {/* India Section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl text-center mb-4">India</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {branches
              .filter((branch) => branch.country === 'India' && !branch.isHeadOffice)
              .map((branch, index) => (
                <div
                  key={index}
                  className={`max-w-md bg-sky-400 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform ${
                    index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={branch.pic}
                      alt={`${branch.pic} flag`}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 text-gray-900">
                    {branch.city}
                  </h4>
                  <p className="text-center text-gray-600 text-sm sm:text-base">{branch.address}</p>
                </div>
              ))}
          </div>
        </div>

        {/* International Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl text-center mb-4">International</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {branches
              .filter((branch) => branch.country !== 'India')
              .map((branch, index) => (
                <div
                  key={index}
                  className={`max-w-md bg-blue-700 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform ${
                    index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={branch.pic}
                      alt={`${branch.country} flag`}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 text-gray-900">
                    {branch.city}
                  </h4>
                  <p className="text-center text-black-600 text-sm sm:text-base">{branch.address}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl text-center font-bold mb-8">
            Our Head Office Location on Google Maps
          </h3>
          <div className="w-full h-96">
            <iframe
              title="Google Maps Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7616.507662546957!2d78.53036058692598!3d17.351514724760623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sH.No%3A%2010-1-55%2FA%2C%20Kameshwara%20Rao%20Colony%2C%20Lingojiguda%2C%20Saroornagar.!5e0!3m2!1sen!2sin!4v1733684673672!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branches;

