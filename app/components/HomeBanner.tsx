import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="h-80 text-white text-start grid bg-cover bg-[url('/banner-image.jpg')] rounded-xl md:rounded-3xl overflow-hidden mb-8">
      <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-40 w-full h-full"></div>
      <div className="col-start-1 row-start-1 mx-auto my-auto px-8 py-2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Portrait</h1>
        <p className="text-lg md:text-xl w-1/2">A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expressions are predominant.</p>
      </div>
    </div>
  );
}

export default HomeBanner;