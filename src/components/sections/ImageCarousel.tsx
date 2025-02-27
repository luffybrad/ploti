"use client";

import React from "react";
import tdlogo from "@/public/tdlogo_label.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function ImageCarousel() {
  return (
    <div className="w-full">
      <Carousel className="w-full relative">
        <CarouselContent className="w-full flex justify-center p-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <Image
                src={tdlogo}
                alt="Image"
                width={500}
                height={500}
                sizes="100vw"
                className="size-full"
                loading="lazy"
                quality={80}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 bg-green-700 text-white p-2 z-10" />
        <CarouselNext className="absolute top-1/2 right-0 bg-green-700 text-white p-2 z-10" />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
