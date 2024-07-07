import React from "react";
import Button from "./Button";
import Image from "next/image";
import { museoModerno, montSerrat } from "../app/fonts";
import UserReview from "./UserReview";

const Download = () => {
  const userReview = {
    name: "John Doe",
    photo: "/background.jpg",
    rating: 4,
    comment: "This is an amazing product! Highly recommend it.",
  };
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start gap-12">
          <h2
            // className={`${montSerrat.className} neon-title`}
            className="neon-title"
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
          <Image src="/phone.png" alt="phones" width={550} height={870} />
        </div>
        <UserReview user={userReview} />
      </div>
    </section>
  );
};

export default Download;
