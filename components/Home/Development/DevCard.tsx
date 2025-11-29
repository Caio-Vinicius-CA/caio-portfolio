import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  date: string;
  title: string;
  entity: string;
};

const DevCard = ({ image, date, title, entity }: Props) => {
  return (
    <div>
      <Image
        alt="Image"
        src={image}
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="mt-1 text-gray-400 font-medium text-base sm:text-sm">
        {date}
      </p>
      <h1 className="mt-0.5 text-lg sm:text-xl font-bold text-gray-400 dark:text-white hover:underline hover:text-[#42569d] hover:dark:text-cyan-200 cursor-pointer transition-all duration-300">
        {title}
      </h1>
      <h1 className="-mt-0.5 text-lg font-bold text-gray-300">{entity}</h1>
    </div>
  );
};

export default DevCard;
