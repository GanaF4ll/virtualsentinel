import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { museoModerno, montSerrat } from "../app/fonts";
import UserReview from "../components/UserReview";
import { ReviewMocks } from "@/constants";

const Download = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app flex flex-row">
        <div className="z-20 flex flex-1 flex-col items-start w-1/2">
          <h2
            // className={`${montSerrat.className} neon-title`}
            className="neon-title"
          >
            {" "}
            Protégeons aujourd'hui pour un avenir sûr
          </h2>

          <p className="mb-3">
            Virtual Sentinel se positionne comme une{" "}
            <strong className="text-orange-primary">
              application incontournable
            </strong>{" "}
            pour quiconque souhaite approfondir ses connaissances en{" "}
            <strong className="text-orange-primary">cybersécurité</strong> et se
            préparer aux défis actuels du monde numérique. Grâce à une gamme
            complète de formations adaptées à tous les niveaux, des novices aux
            experts, et à une interface intuitive et conviviale, nous rendons
            l'apprentissage de la cybersécurité accessible et engageant.
          </p>
          <div className="flex flex-col gap-3 whitesspace-nowrap xl:flex-row px-2">
            {ReviewMocks.map((review) => {
              return <UserReview user={review} />;
            })}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-start  w-1/2">
          <Image src="/phone.png" alt="phones" width={550} height={870} />
          {/* <Image src="/phone.png" alt="phones" width={550} height={870} /> */}
        </div>
      </div>
    </section>
  );
};

export default Download;
