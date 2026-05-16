"use client";
import { CloudSun, MapPin, Gamepad2, Headphones, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanyard } from "use-lanyard";
import Image from "next/image";

const DISCORD_ID = "1168021601657294938";

export default function StatusWidgets() {
  const [time, setTime] = useState("");
  const { data: discord } = useLanyard(DISCORD_ID);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }));
    };
    updateClock();
    const intervalId = setInterval(updateClock, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const statusColors = {
    online: "bg-success",
    idle: "bg-accent-yellow",
    dnd: "bg-accent-pink",
    offline: "bg-gray-400",
  };

  const getStatusColor = (status: string) => {
    return statusColors[status as keyof typeof statusColors] || "bg-gray-400";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
      {/* Weather/Time Widget - Fixed: smaller icon on mobile, flex-wrap for narrow screens */}
      <div className="brutal-card flex items-center p-4 sm:p-6 bg-[#A7F3D0]">
        <div className="flex-shrink-0 mr-4 sm:mr-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-surface border-3 border-border rounded-full flex items-center justify-center shadow-[4px_4px_0_#1A1A1A]">
            <CloudSun size={24} className="text-border md:hidden" />
            <CloudSun size={32} className="text-border hidden md:block" />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={16} className="text-border font-bold flex-shrink-0" />
            <h3 className="font-black text-lg sm:text-xl text-text uppercase">Jakarta, ID</h3>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="font-bold text-text-muted text-sm sm:text-base">Partly Cloudy • 32°C</p>
            <span className="font-mono font-bold bg-surface border-2 border-border px-2 py-1 rounded-md text-xs sm:text-sm">
              {time || "12:00 PM"}
            </span>
          </div>
        </div>
      </div>

      {/* Discord Status Widget - Fixed: smaller icon on mobile, clickable link */}
      <a 
        href={`https://discord.com/users/${DISCORD_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-card flex items-center p-4 sm:p-6 bg-[#C4B5FD] hover:-translate-y-1 transition-transform cursor-pointer"
      >
        <div className="flex-shrink-0 mr-4 sm:mr-6 relative">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-surface border-3 border-border rounded-2xl flex items-center justify-center shadow-[4px_4px_0_#1A1A1A] overflow-hidden">
            {discord?.discord_user ? (
              <Image 
                src={`https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png`} 
                alt="Discord Avatar" 
                width={64} 
                height={64} 
                className="w-full h-full object-cover"
              />
            ) : (
              <Gamepad2 size={24} className="text-[#5865F2]" />
            )}
          </div>
          {/* Online indicator */}
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 ${getStatusColor(discord?.discord_status || 'offline')} border-2 border-border rounded-full`}></div>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-black text-lg sm:text-xl text-text uppercase mb-1 flex items-center gap-2">
            Discord Status
          </h3>
          {discord?.listening_to_spotify ? (
            <div className="flex flex-col">
              <p className="font-bold text-text-muted flex items-center gap-2 text-sm line-clamp-1">
                <Headphones size={16} className="flex-shrink-0" /> 
                <span className="text-text font-black truncate">{discord.spotify?.song}</span>
              </p>
              <p className="text-xs text-text-muted font-bold line-clamp-1">by {discord.spotify?.artist}</p>
            </div>
          ) : discord?.activities?.length ? (
            <p className="font-bold text-text-muted flex items-center gap-2 text-sm line-clamp-1">
              <Activity size={16} className="flex-shrink-0" /> 
              {discord.activities[0].type === 0 ? "Playing" : 
               discord.activities[0].type === 3 ? "Watching" : "Doing"} <span className="text-text font-black ml-1 truncate">{discord.activities[0].name}</span>
            </p>
          ) : (
            <p className="font-bold text-text-muted flex items-center gap-2 text-sm">
              <Gamepad2 size={16} className="flex-shrink-0" /> 
              <span className="text-text font-black">Offline or Chilling</span>
            </p>
          )}
        </div>
      </a>
    </div>
  );
}
