import React from "react";
import Image, { StaticImageData } from "next/image";

import Search from "../search";
import head from "./test images/ya.jpg";
import gal from "./test images/ye.jpg";
import voi from "./test images/yo.jpg";
import beau from "./test images/yu.jpg";

export const metadata = {
  title: "Home | Nova Music",
};
export default function page() {
  return (
    // <section className='hidden lg:block lg:grid-cols-2'>

    <div className="w-full h-full px-5 lg:px-4 lg:py-7 text-uni">
      <Search />
      <section className="font-bold text-uni lg:py-10">
        <h4 className=" md:text-4xl lg:text-2xl">NOW PLAYING</h4>
        <h2 className="text-5xl md:text-8xl lg:text-5xl">Alan Walker</h2>
        <h3 className="text-3xl md:text-8xl lg:text-5xl">ft Kygo</h3>
        <h4 className="text-lg md:text-4xl lg:text-5xl">Give me your love</h4>
      </section>
      <section className="font-bold text-uni">
        <h4 className=" md:text-4xl lg:text-2xl">PLAYLISTS(7)</h4>
        <h2 className="text-5xl md:text-8xl lg:text-5xl">BEST OF</h2>
      </section>

      <section className="grid grid-cols-2 lg:gap-0">
        {/* <Image
          className="rounded-3xl outline outline-black w-4/4 h-2/4 lg:w-4/6 lg:h-3/5"
          src={head}
          alt="yo"
        />
        <Image
          className="rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5"
          src={gal}
          alt="gal"
        />
        <Image
          className="rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5"
          src={voi}
          alt="yo"
        />
        <Image
          className="rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5"
          src={beau}
          alt="gal"
        /> */}
        <ImageCard image={head} alt="olaa" />
        <ImageCard image={gal} alt="heyoo" />
        <ImageCard image={voi} alt="gotohell" />
        <ImageCard image={beau} alt="wobble" />
      </section>
    </div>
    // </section>
  );
}

const ImageCard = ({ alt, image }: { alt: string; image: StaticImageData }) => (
  <div className="flex items-center justify-center w-full px-2 py-0 mx-0 ">
    <Image
      src={image}
      alt={alt}
      className="w-4/5 max-w-full md:w-3/4 rounded-3xl h-1/2"
    />
  </div>
);
