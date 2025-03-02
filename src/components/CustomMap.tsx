import React from "react";

interface Location {
  name: string;
  flag: string;
  mapCoordinates: {
    top: string;
    left: string;
  };
}

const locations: Location[] = [
  {
    name: "Austin, Texas, USA",
    flag: "🇺🇸",
    mapCoordinates: { top: "55%", left: "40%" },
  },
  {
    name: "Bhaktapur, Nepal",
    flag: "🇳🇵",
    mapCoordinates: { top: "70%", left: "80%" },
  },
];

const CustomMap: React.FC = () => {
  return (
    <div className="relative w-full h-[100vh] mx-auto">
      {/* Background Map */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/map_aitc.png')",
          backgroundSize: "cover",
        }}
      />

      {/* Location Markers */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute p-2 bg-white shadow-lg rounded-lg text-center"
          style={{
            top: location.mapCoordinates.top,
            left: location.mapCoordinates.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-2xl">{location.flag}</div>
          <div className="font-medium mt-2">{location.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomMap;
