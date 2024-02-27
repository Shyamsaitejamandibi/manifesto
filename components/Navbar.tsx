import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between md:justify-around">
      <div className="relative flex items-center ">
        <Image
          src="/image/CMGFS.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <Image
          src="/image/mmcc.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <Image
          src="/image/sc.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
      </div>
      <h1 className="text-xl md:text-2xl  font-customFont text-customDarkBlue">
        Akhil Marni
      </h1>
      <div className="flex items-center">
        <Image
          src="/image/sc.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <Image
          src="/image/mmcc.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <Image
          src="/image/CMGFS.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
