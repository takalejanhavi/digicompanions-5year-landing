import Image from "next/image";
import logo from "public/logo.png";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="DigiCompanions Logo"
      width={180}
      height={60}
      priority
      className="object-contain w-[140px] sm:w-[180px]"
    />
  );
}
