import Header from '../components/Header';
import HeroSection from '../components/Hero';
import FeaturesSection from '../components/Feature';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col text-center bg-white text-gray-800">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;



// // src/pages/LandingPage.tsx
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
//       <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Artex</h1>
//       <p className="text-lg text-gray-600 mb-6">Book and explore art exhibition galleries easily</p>
//       <div className="space-x-4">
//         <Link to="/explore" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
//           Explore Art Exhibition Galleries
//         </Link>
//         <div></div>
//         <Link to="/login" className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
