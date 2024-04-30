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
          Chez Virtual Sentinel, notre mission va bien au-delà de simplement
          prévenir les cyberattaques ; nous aspirons à apporter un changement
          positif dans notre société, sur notre planète et dans notre quotidien.
          À travers notre plateforme, nous proposons les dernières actualités et
          informations du monde cybernétique, favorisant ainsi une communauté de
          professionnels qualifiés prêts à partager leur expertise et
          aprentissages. De plus, notre cabinet de conseil offre une gamme de
          services adaptés aux entreprises et aux particuliers.
        </p>
        <div className="my-11 flex flex-wrap gap-5"></div>
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

      <div className="relative flex flex-1 items-center justify-center border-2 border-pink-300">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8  border-2 border-blue-300">
          <div className="flex flex-col border-2 border-green-300">
            {/* <div className="flexBetween  "> */}
            <p className="regular-16 text-gray-20">Image</p>
            <Image
              src="/peopleWorking.png"
              alt="close"
              width={500}
              height={500}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
