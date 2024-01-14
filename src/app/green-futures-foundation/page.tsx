"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";

const OPTIONS = [
  {
    title: "Donation History",
    description: "Learning Courses",
  },
  {
    title: "Transaction History",
    description: "Expert Instructors",
  },
];

export function GreenFuturesFoundation() {
  return (
    <><> <Navbar /> </>
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center">

        {/* Banner Image */}
        <div className="relative mx-auto max-w-lg px-4 lg:px-0 text-center">
          <Image src="/trees.jpg" alt="Banner" layout="fill" objectFit="cover" />
          <div className="relative z-10">
            <Typography variant="h2" color="blue-gray" className="mb-4" children={undefined} placeholder={undefined}>
              Green Futures Foundation
            </Typography>
            <Typography
              variant="lead"
              className="mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0"
            >
              Environmental Advancement
            </Typography>
          </div>
        </div>

        {/* Centered Cards with Equal Gap */}
        <div className="flex justify-center gap-8">
          {OPTIONS.map(({ title, description }) => (
            <div className="w-1/3"> {/* Adjust width as needed */}
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            </div>
          ))}
        </div>
      </div>
    </section></>
  
  );
}

export default GreenFuturesFoundation;
