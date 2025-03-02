import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Project Management",
  "Secure",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className=" py-16 lg:py-24 overflow-x-clip">
      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]  ">
          <div
            className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]"

            //  the below trnasform checks (-750px) checks that the word content is finished and have space in right side, so to avoid, we are duplicating array            // style={{
            //   transform: "translateX(-750px)",
            // }}
          >
            {/*  we are duplicating the word content as it will be finished earlier when moving to left, so duplicating array is necessary while moving */}
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}

            {/* {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
