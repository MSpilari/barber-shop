const Quote = () => {
  return (
    <section
      className="bg-orange-400 w-full h-[43rem] flex flex-col items-center justify-center py-16 gap-16
      lg:flex-row lg:py-24 lg:gap-32 lg:h-[34.3rem]"
    >
      <div className="flex flex-col items-start gap-12 h-96 lg:w-[35rem] lg:h-60">
        <q className="text-4xl font-Roboto font-bold w-80 lg:w-[35rem] lg:h-60 lg:text-5xl">
          Our ambition is to make you leave the salon with a new image of{' '}
          <span className="text-white underline">yourself</span>.
        </q>

        <p className="flex flex-col items-start pl-6 gap-3 text-base text-white font-Roboto">
          <cite className="text-black font-semibold">Richard Davidson,</cite>{' '}
          Manager of the Montpellier lounge
        </p>
      </div>

      <p className="text-xl font-Roboto font-semibold w-72 h-72">
        A clean beard, a chiseled mustache, a personalized cut, targeted care,
        grooming, it´s the art of taking care of yourself. With us, you arrive
        with or without a precise idea of ​​your future look…
      </p>
    </section>
  )
}

export { Quote }
