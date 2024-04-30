import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container paddding-container bg-blue-100 flex flex-col gap-20 py-10 pb-32 md:gap-28 LG:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/LogoLock.png"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-blue-primary ">
          Virtual Sentinel
        </h1>
        <p className="regular-16 mt-6 text-blue-primary xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusamus facilis temporibus, porro ipsam inventore quisquam. Dicta
          rerum asperiores quaerat numquam, alias, cumque eum totam corporis
          necessitatibus velit, quae non?
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/LogoLock.png"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Télécharger l'App"
            variant="btn_blue_primary"
          />
          <Button
            type="button"
            title="Qui somme-nous ?"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start  border-2 border-pink-300">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8  border-2 border-blue-300">
          <div className="flex flex-col border-2 border-green-300">
            <div className="flexBetween  ">
              <p className="regular-16 text-gray-20">Image</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
