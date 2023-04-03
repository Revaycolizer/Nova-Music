"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import play from "../icons/icons8-customer-30.png";
import Image, { StaticImageData } from "next/image";
import home from "../icons/home-page.png";
import cat from "../icons/circle.png";
import album from "../icons/album.png";

export default function menu() {
  return (
    <section className="hidden lg:block fixed w-0.5/4 md:w-2/4 lg:w-1/4 h-full shadow-xl bg-white-900">
      <div className="py-20 lg:px-10 center">
        <AppLink href="/home" image={home} title="Home" />
        <AppLink href="/category" image={cat} title="Category" />
        <AppLink href="/artist" image={play} title="Artist" />
        <AppLink href="/album" image={album} title="Album" />
      </div>
    </section>
  );
}

const AppLink = ({
  href,
  image,
  title,
}: {
  href: string;
  image: StaticImageData;
  title: string;
}) => {
  const isActive = "/" + useSelectedLayoutSegment() === href;

  return (
    <Link href={href}>
      <section
        className={`flex items-start px-4 pt-3 rounded-full cursor-pointer hover:bg-hov focus:outline-none focus:ring focus:ring-hov ${
          isActive && "bg-hov outline"
        }}`}
      >
        <Image height={30} width={30} src={image} alt="play"></Image>
        <h2 className="px-6 mb-4 text-xl font-medium text-black">{title}</h2>
      </section>
    </Link>
  );
};
