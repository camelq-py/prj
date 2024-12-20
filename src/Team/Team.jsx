
import React from 'react';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-4.44.33-PM.jpeg",
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jashawanth",
    role: "Manager",
    image: "https://camelq.in/wp-content/uploads/elementor/thumbs/Untitled-design-3-qwbow3cos29dnspiqm290roeflozisbdkjmcebvqro.png",
    linkedin: "https://www.linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
  {
    name: "Nagulmeera",
    role: "Head of International Branches",
    image: "https://camelq.in/wp-content/uploads/2024/11/Untitled-design-4-283x300.png",
    linkedin: "https://www.linkedin.com/in/saralee",
    twitter: "https://twitter.com/saralee",
  },
  {
    name: "Shaharaz",
    role: "Digital Marketing Manager",
    image: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.14.44-PM-e1721894090779-300x274.jpeg",
    linkedin: "https://www.linkedin.com/in/markmiller",
    twitter: "https://twitter.com/markmiller",
  },
  {
    name: "vinay Kumar",
    role: "IT Recruiter",
    image: "https://camelq.in/wp-content/uploads/2024/07/vj-e1721910407881-300x263.png",
    linkedin: "https://www.linkedin.com/in/alicebrown",
    twitter: "https://twitter.com/alicebrown",
  },
  {
    name: "Alice Brown",
    role: "Design Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIDLyE2qiXbONA33TsxXBaa9vUEn3VxXw3A&s",
    linkedin: "https://www.linkedin.com/in/alicebrown",
    twitter: "https://twitter.com/alicebrown",
  },
  {
    name: "Ian Miller",
    role: "Product Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s",
    linkedin: "https://www.linkedin.com/in/ianmiller",
    twitter: "https://twitter.com/ianmiller",
  },
  {
    name: "Praveen K",
    role: "Legal Adviser",
    image: "https://camelq.in/wp-content/uploads/2024/10/Untitled-design-1-251x300.png",
    linkedin: "https://www.linkedin.com/in/alicebrown",
    twitter: "https://twitter.com/alicebrown",
  },
  {
    name: "Alice Brown",
    role: "Design Lead",
    image: "https://camelq.in/wp-content/uploads/2024/07/aru-e1721910445138-297x300.png",
    linkedin: "https://www.linkedin.com/in/alicebrown",
    twitter: "https://twitter.com/alicebrown",
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-r from-beige-100 to-brown-100 py-16 px-4 md:px-8">
      <div className="container mx-auto text-center">
        {/* Top Manager Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Meet Our Leadership</h2>

        {/* Director Information with Left Side Image, Right Side Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-4.44.33-PM.jpeg" // Replace with the image URL for Mr. Mahesh Erukulla
              alt="Mr. Mahesh Erukulla"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-8 mt-8 md:mt-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">Mr. Mahesh Erukulla</h3>
            <p className="text-lg text-gray-600">Director</p>
            <p className="mt-4 text-gray-600">
              Mr. Mahesh Erukulla is the director of CamelQ Software Solutions. With more than ten years of experience in the software industry and technology, Mahesh's expertise as a manager has been invaluable. His commitment to delivering exceptional services and his vision for the future of CamelQ has made the company a trustworthy leader in the Hyderabad tech space.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 mx-auto bg-white rounded-full overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{member.name}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-20c0-1.103-.897-2-2-2zM7.5 19h-2v-10h2v10zm-1-11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5 11h-2v-5.5c0-1.393-.463-2.344-1.624-2.344-1.17 0-1.876.799-1.876 2.048v5.797h-2v-10h2v1.357c.306-.592.838-1.462 2.017-1.462 1.481 0 2.598.967 2.598 3.052v6.053z"/>
                  </svg>
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M23.644 4.646c-.883.392-1.834.654-2.828.774 1.014-.604 1.794-1.562 2.164-2.724-.951.563-2.001.97-3.12 1.191-.896-.957-2.173-1.552-3.588-1.552-2.34 0-4.242 1.902-4.242 4.24 0 .33.038.654.11.967-3.52-.177-6.64-1.86-8.736-4.42-.365.62-.574 1.341-.574 2.11 0 1.46.743 2.751 1.87 3.5-.688-.022-1.34-.211-1.904-.528v.053c0 2.033 1.445 3.732 3.363 4.121-.352.095-.724.146-1.107.146-.271 0-.535-.026-.793-.076.54 1.687 2.12 2.918 3.986 2.95-1.456 1.141-3.29 1.82-5.264 1.82-.342 0-.681-.02-1.016-.06 1.888 1.21 4.13 1.915 6.521 1.915 7.826 0 12.104-6.502 12.104-12.114 0-.184-.004-.366-.014-.548.83-.597 1.563-1.34 2.136-2.19z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
