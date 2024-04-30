import React from "react";
import Button from "./Button";
import Image from "next/image";
import { museoModerno, montSerrat } from "../app/fonts";

const Download = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start  gap-12 border-2 border-teal-500">
          <h2
            className="neon-title"
            // className={`${museoModerno.className} bold-40 lg:bold-64 xl:max-w-[320px]`}
          >
            {" "}
            Protégeons aujourd'hui pour un avenir sûr
          </h2>

          <p>
            La france a enregisté plus de{" "}
            <strong className="text-green-primary">67000 cyberattaques</strong>{" "}
            en 2020, soit une augmentation de{" "}
            <strong className="text-green-primary">300%</strong> par rapport à
            l'année précédente.
          </p>
          <div className="flex w-1/2 flex-col gap-3 whitesspace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Télécharger Virtual Sentinel"
              icon="/android.svg"
              variant="btn_green_primary"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phonemock.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default Download;
