import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { FaTwitter } from "react-icons/fa";
import { SiRoblox, SiOsu, SiSpotify, SiYoutube } from "react-icons/si";
import { BsCpu, BsMotherboard, BsGpuCard } from "react-icons/bs";
import { RiRam2Line } from "react-icons/ri";

export default function ProfilePage() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-10">
      <div className="bg-white shadow-md rounded w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full">
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="p-4">
            <div className="flex flex-col sm:flex-row sm:space-x-20 mt-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 pb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profileimage.jpg`}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded object-cover mb-4 sm:mb-0"
                />
                <div>
                  <p className="font-semibold">Kevin (Concurrencia)</p>
                  <p>Boeing AH-64 Apache | 19</p>
                  <p>Incel | Misogino</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="mb-2 w-full sm:w-1/1">
                  <h4 className="font-bold pb-1">MI PC !</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex items-center">
                      <BsMotherboard className="mr-2 h-6 w-4 flex-shrink-0" />
                      <span>B550M-K</span>
                    </div>
                    <div className="flex items-center">
                      <BsCpu className="mr-2 h-6 w-4 flex-shrink-0" />
                      <span>RYZEN 5 5600</span>
                    </div>
                    <div className="flex items-center">
                      <BsGpuCard className="mr-2 h-6 w-4 flex-shrink-0" />
                      <span>RX 580 8GB</span>
                    </div>
                    <div className="flex items-center">
                      <RiRam2Line className="mr-2 h-6 w-4 flex-shrink-0" />
                      <span>16 GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className="mb-4 w-full sm:w-2/3 pr-4">
                <h4 className="font-bold pb-1">GUSTOS !</h4>
                <ul className="text-sm">
                  <li>Rick and Morty & Fuck News</li>
                  <li>Minecraft, Roblox, Terraria & Osu!mania</li>
                  <li>Pylover & Lualover</li>
                </ul>
              </div>
              <div className="mb-3 w-full sm:w-1/1">
                <h4 className="font-bold pb-1">MIS COSAS !</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a href="https://x.com/Concurr3ncia" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FaTwitter className="text-blue-500 mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Concurr3ncia</span>
                  </a>
                  <a href="https://www.roblox.com/users/978020410/profile" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <SiRoblox className="text-gray-800 mr-2 h-6 w-6 flex-shrink-0" />
                    <span>zKeven</span>
                  </a>
                  <a href="https://osu.ppy.sh/users/15821134" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <SiOsu className="text-pink-500 mr-2 h-6 w-6 flex-shrink-0" />
                    <span>SadSyruz</span>
                  </a>
                  <a href="https://open.spotify.com/user/31fhfilaa7otr4c4buj3rcucuuwe?si=8f3d0eb6ae9541a4" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <SiSpotify className="text-green-500 mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Concurrencia</span>
                  </a>
                  <a href="https://www.youtube.com/@Concurr3ncia" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <SiYoutube className="text-red-500 mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Concurr3ncia</span>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm italic mb-4">
              Si vos corres, yo corro. Si vos saltas, yo salto.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              <div className="bg-gray-200 h-20 sm:h-24 md:h-32 rounded">
                <img
                  src={`${process.env.PUBLIC_URL}/gifs/minecraftgif.gif`}
                  alt="Minecraft"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="bg-gray-200 h-20 sm:h-24 md:h-32 rounded">
                <img
                  src={`${process.env.PUBLIC_URL}/gifs/evaderoblox.gif`}
                  alt="Evade"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="bg-gray-200 h-20 sm:h-24 md:h-32 rounded">
                <img
                  src={`${process.env.PUBLIC_URL}/gifs/osu!mania.gif`}
                  alt="Osu!mania"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="bg-gray-200 h-20 sm:h-24 md:h-32 rounded">
                <img
                  src={`${process.env.PUBLIC_URL}/gifs/terraria.gif`}
                  alt="Terraria"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
