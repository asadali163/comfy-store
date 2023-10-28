const About = () => {
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Comfy, we&apos;re dedicated to elevating your comfort game. Explore
        our collection of loungewear, home essentials, and unique gifts designed
        to make your everyday life a little more comfy, a lot more stylish, and
        always convenient. Discover the joy of comfort with Comfy today.
      </p>
    </>
  );
};
export default About;
