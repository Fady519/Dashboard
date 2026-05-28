"use client";
import React, { useEffect, useState, useRef } from "react";
import { Globe as GlobeIcon, Users, TrendingUp, DollarSign } from "lucide-react";
import dynamic from "next/dynamic";


const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });


const countriesSystemData = [
  {
    lat: 26.8206,
    lng: 30.8025,
    name: "Egypt",
    users: "4,200",
    sales: "$12,400",
    growth: "+15%",
    color: "#4f46e5"
  },
  {
    lat: 23.8859,
    lng: 45.0792,
    name: "Saudi Arabia",
    users: "3,100",
    sales: "$9,800",
    growth: "+12%",
    color: "#10b981"
  },
  {
    lat: 23.4241,
    lng: 53.8478,
    name: "UAE",
    users: "2,400",
    sales: "$8,200",
    growth: "+18%",
    color: "#10b981"
  },
  {
    lat: 37.0902,
    lng: -95.7129,
    name: "United States",
    users: "8,500",
    sales: "$45,000",
    growth: "+22%",
    color: "#4f46e5"
  },
  {
    lat: 55.3781,
    lng: -3.4360,
    name: "United Kingdom",
    users: "1,900",
    sales: "$7,100",
    growth: "+8%",
    color: "#6366f1"
  }
];

export default function GeographyPage() {
  const globeRef = useRef<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<typeof countriesSystemData[0] | null>(null);

  useEffect(() => {
    if (globeRef.current) {
      
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.4;
      
     
      globeRef.current.controls().maxDistance = 400;
      globeRef.current.controls().minDistance = 150;
    }
  }, []);

  
  const focusOnCountry = (country: typeof countriesSystemData[0]) => {
    setSelectedCountry(country);
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: country.lat, lng: country.lng, altitude: 1.8 }, 1000);
    }
  };

  return (
    <div className="space-y-6">
     
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
            <GlobeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            3D Enterprise Geographic Control
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Scroll to zoom into countries, click infrastructure points to sync database records instantly.
          </p>
        </div>
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="lg:col-span-1 space-y-4 flex flex-col justify-between">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 h-full">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">System Live Feeds</h2>
            
            
            <div className="space-y-2">
              {countriesSystemData.map((country) => (
                <button
                  key={country.name}
                  onClick={() => focusOnCountry(country)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                    selectedCountry?.name === country.name
                      ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <span>{country.name}</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-bold">
                    {country.users} Users
                  </span>
                </button>
              ))}
            </div>

         
            {selectedCountry ? (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 space-y-4 animate-fade-in">
                <h3 className="font-bold text-slate-900 dark:text-slate-50 text-lg border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center justify-between">
                  <span>{selectedCountry.name} Analytics</span>
                  <span className="text-xs font-bold text-emerald-500 flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" /> {selectedCountry.growth}
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block flex items-center gap-1"><Users className="h-3 w-3" /> Active Users</span>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedCountry.users}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block flex items-center gap-1"><DollarSign className="h-3 w-3" /> Total Sales</span>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedCountry.sales}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-6 p-6 text-center text-sm text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                Select or zoom into a country to pull database metrics.
              </div>
            )}
          </div>
        </div>

       
        <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm overflow-hidden flex items-center justify-center min-h-[550px] relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          
          <div className="absolute top-4 right-4 text-right z-10 hidden sm:block">
            <span className="text-xs font-semibold bg-slate-900/80 dark:bg-slate-800/80 text-white px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
              ✨ Scroll wheel to Zoom deep into target market
            </span>
          </div>

          <div className="cursor-grab active:cursor-grabbing w-full flex justify-center">
            <Globe
              ref={globeRef}
              width={650}
              height={500}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" 
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundColor="rgba(0,0,0,0)" 
              
              
              htmlElementsData={countriesSystemData}
              htmlLat={(d: any) => d.lat}
              htmlLng={(d: any) => d.lng}
              htmlElement={(d: any) => {
                const el = document.createElement("div");
                
                el.innerHTML = `
                  <div class="flex flex-col items-center group relative">
                    <span class="absolute inline-flex h-6 w-6 animate-ping rounded-full opacity-75" style="background-color: ${d.color}"></span>
                    <div class="h-4 w-4 rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform transform group-hover:scale-125" style="background-color: ${d.color}"></div>
                    <div class="mt-1 bg-slate-900/90 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md whitespace-nowrap pointer-events-none">
                      ${d.name}
                    </div>
                  </div>
                `;
                el.onclick = () => focusOnCountry(d);
                return el;
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}