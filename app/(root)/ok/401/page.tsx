
import { ModeToggle } from '@/components/theme-togle';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import React from 'react';

const Unauthorized = () => {
  return (
    <div className='h-screen'>
      <div className='fixed top-1 right-1'>
        <ModeToggle/>
      </div>
      <div className='h-full w-full flex flex-col items-center justify-center p-4'>
        {/* Image with responsive sizing */}
        <Image
          src="/401-Error-Unauthorized.png"
          width={600}
          height={600}
          alt='You are not authorized to access this page.'
          className='w-full max-w-[600px] h-auto'
          priority // Preload the image for better performance
        />
        {/* Back to Home Button */}
        <Link
          href="/"
          className='mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-stone-600 transition-colors'
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;