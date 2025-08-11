import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { assets } from "../assets/assets";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Leonard Johnson",
    text: "This company completely exceeded my expectations. I will definitely be coming back!",
    photo: assets.testimonial_1_img,
  },
  {
    name: "Mark Smith",
    text: "The service was quick, professional, and friendly. Highly recommend to everyone.",
    photo: assets.testimonial_2_img,
  },
  {
    name: "David Brown",
    text: "A wonderful experience from start to finish. The team truly cares about their customers.",
    photo: assets.testimonial_3_img,
  },
  {
    name: "Richard Lee",
    text: "High quality, great value, and an overall enjoyable experience.",
    photo: assets.testimonial_4_img,
  },
  {
    name: "Ian White",
    text: "Their expertise helped transform our project—truly top-notch collaboration and results.",
    photo: assets.testimonial_5_img,
  },
  {
    name: "Luciano Rossi",
    text: "Fast, efficient, and exactly what I needed. Excellent work.",
    photo: assets.testimonial_6_img,
  },
  {
    name: "Giovanni Bianchi",
    text: "Professional, reliable, and innovative. I’m impressed by their commitment to excellence.",
    photo: assets.testimonial_7_img,
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((t, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <Card className="shadow-lg h-full">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <p className="text-lg italic">"{t.text}"</p>
                  <span className="text-sm font-semibold">{t.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
