import Link from "next/link";
import React from "react";

import play from "../icons/icons8-customer-30.png";
import Image from "next/image";
import home from "../icons/home-page.png";
import cat from "../icons/circle.png";
import album from "../icons/album.png";

export default function menu() {
  return (
    <section className="fixed w-1/4 h-full shadow-xl bg-white-900">
      <div className="px-10 py-40 center">
        <Link href="/home">
          <section className="flex items-start px-4 pt-3 rounded-full cursor-pointer hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov">
            <Image height={34} width={34} src={home} alt="play"></Image>
            <h2 className="px-6 mb-4 text-xl font-medium text-black">Home</h2>
          </section>
        </Link>
        <section className="flex items-start px-4 pt-3 rounded-full bg-hov hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov">
          <Image height={34} width={34} src={cat} alt="play"></Image>
          <h2 className="px-6 mb-4 text-xl font-medium text-black">Category</h2>
        </section>
        <Link href="/artist">
          <section className="flex items-start px-4 pt-3 rounded-full cursor-pointer hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov">
            <Image src={play} alt="play"></Image>
            <h2 className="mb-4 text-xl font-medium text-black px-7">Artist</h2>
          </section>
        </Link>
        <Link href="/album">
          <section className="flex items-start px-4 pt-3 rounded-full cursor-pointer hover:bg-hov active:bg-hov focus:outline-none focus:ring focus:ring-hov">
            <Image height={34} width={34} src={album} alt="play"></Image>
            <h2 className="px-6 mb-4 text-xl font-medium text-black">Album</h2>
          </section>
        </Link>
        <ul className="flex flex-col text-sm text-white">
          {/* {users?.map(user=>{
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                })} */}
        </ul>
      </div>
    </section>
  );
}
