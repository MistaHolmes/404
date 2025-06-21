"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Coffee } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="bg-white font-serif min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div
              className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              aria-hidden="true"
            >
              <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8">
                404
              </h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl text-black sm:text-3xl font-bold mb-4">
                Out of Credits, Not Out of Ideas!
              </h3>
              <p className="mb-6 text-black sm:mb-5">
                This site took a nap because I ran out of cloud credits. Check back soon — or fund my caffeine and deployment budget 😉
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <Link href="https://abhasbehera.vercel.app/" passHref>
                  <Button className="bg-green-600 hover:bg-green-700 w-52">
                    Go to Home
                  </Button>
                </Link>

                <Link href="https://buymeacoffee.com/abhastheain" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-52">
                    <Coffee className="w-4 h-4 mr-2" />
                    Buy Me a Coffee
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
