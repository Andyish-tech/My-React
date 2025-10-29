import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#ffffff] text-white pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Image and badge */}
        <div className="relative">
          <div className="absolute left-60 top-8 bg-[#f7c17b] text-white px-8 py-10 rounded-full font-semibold">
            BEST
          </div>
          <img
            src="../../public/images/10002.png"
            alt="cycle"
            className="relative w-[600px] drop-shadow-xl mt-30"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-4 bg-gray-700 mb-0 py-50 px-30 bg-clip-border">
          <h1 className="text-5xl font-bold text- leading-tight">
            New <br /> Model <br /> Cycle
          </h1>
          <p className="text-gray-200">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <button className="bg-[#f7c17b] hover:bg-white hover:text-black text-white px-10 py-3  font-semibold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Slider arrows */}
      <div className="absolute bottom-10 right-10 flex space-x-4">
        <button className="bg-orange-400 hover:bg-orange-500 p-3 rounded-md">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="bg-[#2b4b54] hover:bg-[#355d66] p-3 rounded-md border border-white">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
