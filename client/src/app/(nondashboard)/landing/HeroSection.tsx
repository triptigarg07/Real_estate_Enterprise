"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey to find the perfect place to call Home
          </h1>
          <p className="text-xl text-white mb-8">
            Explore our wide range of rental properties tailored to fit your
            lifestyle and needs!
          </p>
          <div className="flex justify-center">
            <Input
              type="text"
              value="search query"
              onChange={() => {}}
              placeholder="Search by city, neighbourhood or address"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              onClick={() => {}}
              className="bg-red-400 text-white rounded-none rounded-r-xl border-none hover:bg-red-500 h-12"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
