import { useState } from "react";
import { CircleCheckBig } from "lucide-react";

const experience = [
  {
    emoji: "😡",
    feeling: "Angry!",
  },
  {
    emoji: "🙁",
    feeling: "Sad!",
  },
  {
    emoji: "😐",
    feeling: "Neutral!",
  },
  {
    emoji: "🙂",
    feeling: "Happy!",
  },
  {
    emoji: "😍",
    feeling: "Awesome!",
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState("");

  const handleChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  return (
    <div>
      <h3 className="my-4 mb-5 text-lg font-medium">Rate your experience</h3>
      <div className="flex justify-between items-center space-x-2">
        {experience.map((item, index) => (
          <label
            key={index}
            htmlFor={`feeling-${index}`}
            className="cursor-pointer flex flex-col relative items-center"
          >
            <input
              type="radio"
              name="feeling"
              id={`feeling-${index}`}
              value={item.feeling}
              className="hidden"
              onChange={handleChange}
            />
            <div className="flex flex-col items-center space-y-2">
              <span
                role="img"
                aria-label={item.feeling}
                className={`text-3xl p-[0.7rem] rounded-full transition-all duration-200 ${
                  selectedExperience === item.feeling
                    ? "bg-pink-300"
                    : "bg-pink-100"
                }`}
              >
                <CircleCheckBig
                  className={` h-5 w-5 absolute top-0 right-px text-pink-500  ${
                    selectedExperience === item.feeling
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
                {item.emoji}
              </span>
              <span
                className={`text-base text-pink-500 font-medium transition-all duration-200 ${
                  selectedExperience === item.feeling
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {item.feeling}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
