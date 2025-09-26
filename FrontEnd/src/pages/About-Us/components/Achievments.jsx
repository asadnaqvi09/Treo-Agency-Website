import React from "react";
import Counter from "../../../utility/counter";

function Achievements() {
  return (
    <section className="py-10 px-4 md:px-10 bg-blue-50">
      <div className="flex flex-col text-center items-center justify-center ">
        <h2 className="text-4xl font-bold">Our Achievements</h2>
        <h3 className="text-xl font-semibold text-gray-400 max-w-2xl">Numbers that reflect our commitment to excellence and client satisfaction.</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
        <div>
          <Counter end={10} duration={1} />
          <p className="mt-2">Projects</p>
        </div>
        <div>
          <Counter end={5} duration={1} />
          <p className="mt-2">Clients</p>
        </div>
        <div>
          <Counter end={3} duration={1} />
          <p className="mt-2">Awards</p>
        </div>
        <div>
          <Counter end={100} duration={1} />
          <p className="mt-2">Cups of Coffee ☕</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
