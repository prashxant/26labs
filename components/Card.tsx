import React from 'react'

export const SkewCards = () => {
  return (
    <div >
      <Card/>
    </div>
  )
}


export const Card = () => {
  return (
    <div>
 Card
    </div>
  )
}



// const ServiceCard = ({ icons, title, description, linkText }) => (
//   <div className="border border-gray-400 p-8 bg-gray-100 h-full flex flex-col">
//     {icons.length > 0 && (
//       <div className="flex gap-3 mb-6">
//         {icons.map((icon, index) => (
//           <div
//             key={index}
//             className="w-10 h-10 flex items-center justify-center"
//           >
//             {icon}
//           </div>
//         ))}
//       </div>
//     )}
//     <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//     <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
//       {description}
//     </p>
//     <a
//       href="#"
//       className="text-base inline-flex items-center gap-2 hover:underline"
//     >
//       <span>↓</span> {linkText}
//     </a>
//   </div>
// );



// const ServicesGrid = () => {
//   const services = [
//     {
//       icons: [
//         <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
//           Ps
//         </div>,
//         <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
//           <span className="text-white text-2xl">F</span>
//         </div>,
//         <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
//           <span className="text-white text-2xl">⌐</span>
//         </div>,
//       ],
//       title: "Design.",
//       description:
//         "We use a modern design stack powered by Adobe Creative Suite, Figma, and Framer to craft visually striking and highly functional digital experiences.",
//       linkText: "Explore Design Content",
//     },
//     {
//       icons: [
//         <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
//           <span className="text-blue-500 text-xl">⚛</span>
//         </div>,
//         <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//           <span className="text-white text-xl">Λ</span>
//         </div>,
//         <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
//           <span className="text-white text-xl">〜</span>
//         </div>,
//       ],
//       title: "Devlope.",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Morbi risus nibh accumsan risus ac mauris.",
//       linkText: "Find more about Development",
//     },
//     {
//       icons: [
//         <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
//           <span className="text-white text-xl">▲</span>
//         </div>,
//         <div className="w-10 h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded flex items-center justify-center">
//           <span className="text-white text-xl">|||</span>
//         </div>,
//         <div className="w-10 h-10 bg-teal-400 rounded flex items-center justify-center">
//           <span className="text-white text-xl">-n-</span>
//         </div>,
//       ],
//       title: "Deploy.",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Morbi risus nibh accumsan risus ac mauris.",
//       linkText: "Know about Deploiment",
//     },
//     {
//       icons: [
//         <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
//           <span className="text-white text-xl">⚡</span>
//         </div>,
//         <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//           <span className="text-white text-xl">🐙</span>
//         </div>,
//         <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
//           <span className="text-white text-xl">☁</span>
//         </div>,
//       ],
//       title: "Maintain.",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Nec tristique bibendum diam sit sed. Nunc id neque porta diam leo lorem bibendum massa hendrerit.",
//       linkText: "Maintenance need coinsistence",
//     },
//     {
//       icons: [],
//       title: "Support(24x7)",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Nec tristique bibendum diam sit sed. Nunc id neque porta diam leo lorem bibendum massa hendrerit.",
//       linkText: "2am push a update",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-200 p-8 flex items-center justify-center">
//       <div className="max-w-6xl w-full">
//         <h1 className="text-5xl font-bold text-center mb-12">
//           to Launch Your <span className="text-orange-500">own Website</span>
//         </h1>

//         <div className="flex flex-col items-center gap-0">

//           <div className="grid grid-cols-3 w-full">
//             <ServiceCard {...services[0]} />
//             <ServiceCard {...services[1]} />
//             <ServiceCard {...services[2]} />
//           </div>

//           {/* Second row - 2 cards centered */}
//           <div className="flex justify-center w-full">
//             <div className="w-2/3 grid grid-cols-2">
//               <ServiceCard {...services[3]} />
//               <ServiceCard {...services[4]} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesGrid;
