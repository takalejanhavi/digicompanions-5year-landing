import Image from "next/image";
import logo from "public/logo.png";

export default function Logo() {
  return (
    <div className="fixed top-4 left-6 z-50">
      <Image
        src={logo}
        alt="DigiCompanions Logo"
        width={180}
        height={60}
        priority
        className="object-contain w-[140px] sm:w-[180px]"
      />
    </div>
  );
}
