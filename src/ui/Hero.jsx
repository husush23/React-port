function Hero() {
  return (
    <>
      <div className="mx-auto mt-4 space-y-4 sm:flex sm:items-center">
        <div className="mb-4 flex flex-col px-8 py-2">
          <h1 className="text-4xl sm:text-8xl">
            <span className="font-beVietnamPro font-semibold">
              Hi. I am a <br />
            </span>
            <span className="font-plairFairDisplay sm:text-7xl">
              full-stack developer <br />
            </span>
            <span className="font-poppins font-semibold">based in Nairobi</span>
          </h1>
        </div>
        <img
          src="./hussein2.png"
          className="mx-auto mt-4 w-10/12 rounded-[30%] sm:h-4/5 sm:w-4/12"
        />
      </div>
      <div className="social">
        <a>LinkedIn</a>
        <a>Facebook</a>
        <a>Behance</a>
      </div>
    </>
  );
}

export default Hero;
