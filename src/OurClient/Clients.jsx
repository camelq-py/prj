// import React from 'react';

// const OurClients = () => {
//   // Sample top clients (you can replace these with real logos or images)
//   const clients = [
//     { name: 'Company 1', logo: 'https://www.clutch.com/wp-content/uploads/2018/04/Accenture-logo-no-background.png' },
//     { name: 'Company 2', logo: 'https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png' },
//     { name: 'Company 3', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
//   ]

//   return (
//     <section id="clients" className="py-16 bg-orange-600">
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-6">Our Top Clients</h2>
//       <div className="overflow-hidden relative">
//         {/* Scrolling container */}
//         <div className="whitespace-nowrap animate-scroll flex gap-8 px-4 sm:px-8 md:px-12 py-4">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 animate-[rotate_10s_linear_infinite]"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;


// import React from 'react';

// const OurClients = () => {
//   // Sample top clients (you can replace these with real logos or images)
//   const clients = [
//     { name: 'Company 1', logo: 'https://www.clutch.com/wp-content/uploads/2018/04/Accenture-logo-no-background.png' },
//     { name: 'Company 2', logo: 'https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png' },
//     { name: 'Company 3', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
//   ];

//   return (
//     <section id="clients" className="py-16 bg-orange-600 flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">Our Top Clients</h2>
//         <div className="overflow-hidden relative">
//           {/* Scrolling container */}
//           <div className="whitespace-nowrap animate-scroll flex gap-8 px-4 sm:px-8 md:px-12 py-4 justify-center">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 animate-[rotate_10s_linear_infinite]"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;
import React from 'react';

const OurClients = () => {
  // Sample top clients (you can replace these with real logos or images)
  const clients = [
    { name: 'Company 1', logo: 'https://www.clutch.com/wp-content/uploads/2018/04/Accenture-logo-no-background.png' },
    { name: 'Company 2', logo: 'https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png' },
    { name: 'Company 3', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  ];

  return (
    <section id="clients" className="py-8 sm:py-16 bg-orange-600 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6">Our Top Clients</h2>
        <div className="overflow-hidden relative">
          {/* Scrolling container */}
          <div className="whitespace-nowrap animate-scroll flex gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 py-4 justify-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 animate-[rotate_10s_linear_infinite]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 sm:h-12 md:h-16 lg:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

