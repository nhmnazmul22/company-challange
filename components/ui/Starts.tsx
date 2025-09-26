import { Star } from "lucide-react";
import React from "react";

type Props = {
  rating: number;
};

const Starts = ({ rating }: Props) => {
  const roundRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: roundRating }).map((_, index) => (
        <span key={index}>
          <Star fill="currentColor" className="text-amber-400" />
        </span>
      ))}
      {roundRating < 5 &&
        Array.from({ length: 5 - roundRating }).map((_, index) => (
          <span key={index}>
            <Star className="text-amber-400" />
          </span>
        ))}
    </div>
  );
};

export default Starts;
