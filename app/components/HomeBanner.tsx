import Image from "next/image";

const HomeBanner = () => {
  return (
    // <div className="relative mb-8 rounded-xl md:rounded-3xl overflow-hidden">
    //   <Image
    //     src="/banner-image.jpg"
    //     fill
    //     alt="Banner Image"
    //     className="object-cover"
    //   />
    //   <div className="relative z-20 w-1/2 min-h-[350px] flex flex-col justify-center ml-8 md:ml-8">
    //     <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">Portrait</h1>
    //     <p className="text-lg md:text-xl text-white mb-2">A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expressions are predominant.</p>
    //   </div>
    // </div>

    <div className="h-80 text-white text-center grid bg-cover bg-[url('/banner-image.jpg')] rounded-xl md:rounded-3xl overflow-hidden mb-8">
      <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-40 w-full h-full"></div>
      <div className="col-start-1 row-start-1 mx-auto my-auto px-8 py-2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Portrait</h1>
        <p className="text-lg md:text-xl">A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expressions are predominant.</p>
      </div>
    </div>
  );
}

export default HomeBanner;