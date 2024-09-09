"use client";
import React, { useState } from "react";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import {Highlight } from "@/components/ui/hero-highlight";

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import { FocusCards } from "@/components/ui/focus-cards";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function Home() {

  const words = ["Database", "Tracker", "Finder"];

  const cards = [
    {
      title: "Forest",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    
  ];

  const placeholders = [
    "Search Any Anime!",
    "Who is Your Voice Actor?",
    "Search by Genre? We Got You!"
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };


  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
  
      <BackgroundBeamsWithCollision>
        {/* Cover and main heading */}
        <div className="text-center py-8">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
            <div className="pb-3 mt-48">
              <Cover>Anime Sphere</Cover>
            </div>
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="mt-4 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Your Anime </span>
                <Highlight className="text-black dark:text-white">
                  <FlipWords words={words} />
                </Highlight>
                
              </div>
              
            </div>
            <div className="mt-8 relative flex justify-center items-center">

              {/* Gradients */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />


      
              {/* Core component */}
              {/* <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#00000"
              /> */}
      
        
            </div>
          </h2>
        </div>
        {/* Placeholder */}
        <div className="h-[10rem] flex flex-col justify-center  items-center px-4">
          
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
  
        {/* Upcoming Anime Section */}
        <div className="mt-12 grid gap-4 p-4">
          <div className="flex justify-center">
            <h2 className="mb-5 max-w-7xl text-xl md:text-5xl font-bold text-black font-sans">
              Upcoming Anime
            </h2>
          </div>
          <div className="flex justify-center">
            <FocusCards cards={cards} />
          </div>
        </div>

        
        {/* Test */}

        
      
      
    
        
      </BackgroundBeamsWithCollision>
    </>
  );
  
}


function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}