function Hero() {
  return (
    <div className='mx-auto mt-4'>
      <div className='flex flex-col px-8 py-2'>
        <h1 className='text-4xl font-beVietnamPro'>
          Hi, I am a <br />
          <span className='font-plairFairDisplay'>
            Visual designer <br />
          </span>
          <span className='font-poppins'>Based in Nairobi</span>
        </h1>
      </div>
      <img src='./hussein.png' />
      <div className='social'>
        <a>LinkedIn</a>
        <a>Facebook</a>
        <a>Behance</a>
      </div>
    </div>
  );
}

export default Hero;
