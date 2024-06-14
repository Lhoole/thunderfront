import Link from "next/link";
import Image from "next/image";
import logo from "./../assets/images/thunderlabs-logo.png";
const Header = () => {
  return (
    <div className="flex w-screen justify-between bg-[#111418]">
      <div className="">
        <Link href="/">
          <Image src={logo.src} alt="" width={200} height={200} />
        </Link>
      </div>
      <div className="flex justify-end text-white">
        <div className="mx-3 flex items-center ">
          <button>Take me to the website</button>
        </div>
        <div className="mx-3 flex items-center">
          <button className="rounded bg-red-800 px-3 py-1">Contact</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
