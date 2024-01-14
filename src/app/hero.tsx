"use client";

import Image from "next/image";
import trees from '/src/image/trees.jpg'
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Welcome to Charity Chain – <br /> Revolutionizing Charitable Giving with Blockchain
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Trust, Transparency, Transformation. 
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Empower Your Donations with Absolute Transparency
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                For Donors
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                For Non-Profits
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src={trees}
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md" id="aboutUs">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Why Charity Chain
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-8/12"
          >
            - Cutting-Edge Technology: Built on a robust blockchain foundation using React and Node.js/Express.js for a seamless experience.
            - Integrity and Accountability: Every transaction is recorded on a transparent ledger. No more guessing about where your money goes.
            - Community of Change: Join a global network of donors and charities committed to making a difference.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
