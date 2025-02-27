"use client";
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
        <CarouselContent className="w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full flex justify-center items-center"
            >
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src={tdlogo || "/placeholder.svg"}
                  alt={`Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={80}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 bg-green-700 text-white p-2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 bg-green-700 text-white p-2 z-10" />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
