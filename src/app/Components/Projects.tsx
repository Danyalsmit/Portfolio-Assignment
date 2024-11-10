import React from "react";

const ProjectSection = () => {
  return (
    <>
      {/* <div className="Hero-Section bg-gray-600  w-full h-[550px]"> */}
      {/* <h1 className="flex justify-center p-6">
          These are some of my projects
        </h1> */}
      <section
        className="text-gray-400 body-font w-full"
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-semibold mb-4  text-white">
              These are some of my projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Project2.src}
                /> */}
                <div className="px-8 py-10 relative  w-full border-4 border-gray-800 text-white bg-[#2d0055]">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    PERSONAL PORTFOLIO
                  </h1>
                  {/* <h1 className="title-font text-lg font-medium text-white mb-3">
                    personal portfolio
                  </h1> */}
                  <p className="leading-relaxed">
                    Showcasing my journey, skills, and projects – a closer look
                    at my passion for technology and creativity.
                  </p>
                  <button className="border px-8 mt-4">
                    <a href="https://danyalportfolio.vercel.app/">Demo</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                /> */}
                <div className="px-8 py-10 relative  w-full border-4 border-gray-800 text-white bg-[#2d0055]">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    CAMPUSAPP
                  </h1>
                  {/* <h1 className="title-font text-lg font-medium text-white mb-3">
                    CampusApp
                  </h1> */}
                  <p className="leading-relaxed">
                    Stay connected with your campus community – access events,
                    resources, and updates all in one app.
                  </p>
                  <button className="border px-8 mt-4">
                    <a href="https://campusapp-lemon.vercel.app/">Demo</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                /> */}
                <div className="px-8 h-[258px] py-10 relative w-full border-4 border-gray-800 text-white bg-[#2d0055]">
                  <h1 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    E-COMMERCE
                  </h1>
                  {/* <h1 className="title-font text-lg font-medium text-white mb-3">
                    E -Commerece
                  </h1> */}
                  <p className="leading-relaxed">
                    Your one-stop shop for the latest trends and unbeatable
                    deals, delivered right to your door.
                  </p>
                  <button className="border px-8 mt-5">
                    <a href="https://bzarapp.vercel.app/">Demo</a>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center px-8 py-10 relative border-4 border-gray-800 bg-gray-900 "
                  src={Project1.src}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center px-8 py-10 relative border-4 border-gray-800 bg-gray-900 "
                  src={Project2.src}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/606x366"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};
export default ProjectSection;
