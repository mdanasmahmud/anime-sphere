"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `This Is An Anime Website, You Can Create Your Own Playlist, Track Your Anime`;

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="m-5 p-4 border-2 border-gray-300 rounded-lg shadow-lg">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}