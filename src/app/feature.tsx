"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  GlobeAltIcon,
  BookOpenIcon,
  HeartIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: GlobeAltIcon,
    title: "Green Futures Foundation",
    children:
      "To safeguard our planet's future by promoting sustainable living, protecting endangered species, and restoring natural habitats. Join us in creating a greener, cleaner earth for generations to come.",
  },
  {
    icon: BookOpenIcon,
    title: "Bridgetech Education",
    children:
      "Bridging the digital divide by providing technology access and education to underprivileged communities. We empower children and adults alike with the skills needed to thrive in the digital age.",
  },
  {
    icon: HeartIcon,
    title: "Hearts United",
    children:
      "Dedicated to bringing hope and assistance to crisis-stricken communities worldwide. From disaster relief to long-term development projects, we're committed to helping rebuild lives with compassion and dignity.",
  },
  {
    icon: PaintBrushIcon,
    title: "Artistic Horizons",
    children:
      "Cultivating creativity and preserving cultural heritage. We support artists, fund cultural projects, and foster community arts programs to keep the arts alive and accessible for all.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Explore Our Diverse Range of Charitable Causes
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          At Charity Chain, we believe in the power of choice and diversity. Our platform features a wide array of charities, each with its unique focus and mission. Discover a cause that resonates with you and embark on a journey of impactful giving. Here's a glimpse of some of the charities you can support:
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
