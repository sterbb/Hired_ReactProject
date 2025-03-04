

interface Props {
    title?:string;
    subtitle?:string;
}

const Hero = ({title="A Site Full of Dreams",
  subtitle="Find a place that fits your skills and experience"}:Props) => {
  return (
    <>
    {/* <!-- Hero --> */}
          <section className="bg-blue-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
    </>

  )
}

export default Hero