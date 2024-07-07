import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const UserReview = ({ user }) => {
  const { name, photo, rating, comment } = user;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image key={i} src={"/star.svg"} alt={"star"} width={24} height={24} />
      );
    }
    return stars;
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-[250px] h-[300px] p-6 rounded-lg shadow-lg max-w-md "
      style={{
        backgroundImage: "linear-gradient(to bottom right, #DB8B34, #193762)",
      }}
    >
      <div className="mb-4 items-center flex flex-col">
        <Image
          src={photo}
          alt={`${name}'s photo`}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="flex flex-col justify-end items-center">
        <p className="text-lg text-center">{comment}</p>
      </div>
      <div className="flex mb-4">{renderStars(rating)}</div>
    </div>
  );
};

export default UserReview;
