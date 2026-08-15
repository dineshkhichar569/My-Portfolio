import Navbar from "../Components/Navbar";
import GallerySection from "../Components/GallerySection";

import image from "../assets/profile2.jpg";

const GalleryPage = () => {
  return (
    <section className="bg-black pt-36 h-screen">
      <Navbar />

      {/* Profile display */}
      <div className="mx-4 md:mx-[50px] mb-[40px] flex flex-col md:flex-row gap-6 md:gap-[50px] items-center rounded-3xl p-4 md:p-6 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] overflow-hidden group transition-all duration-1000">
        <img
          className="w-32 h-32 md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-black"
          loading="lazy"
          src={image}
          alt="img"
        />
        <div className="text-center md:text-left">
          <p className="text-white text-xl md:text-4xl font-rubrik font-semibold tracking-wide md:tracking-wider">
            Every image is a moment I personally captured through my lens.
          </p>
          <p className="text-white text-lg md:text-xl mt-3 font-signature text-end md:text-right">
            Dinesh Khichar...
          </p>
        </div>
      </div>

      <GallerySection />
    </section>
  );
};

export default GalleryPage;
