'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="fixed -top-10 left-6 z-50">
      <Image
        src="/logo.png"
        alt="DigiCompanions Logo"
        width={200}
        height={65}
        priority
        className="object-contain"
      />
    </div>
  );
}