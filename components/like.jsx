import { useState } from "react";
import { Check } from "lucide-react";

const options = [
  { id: "delivery-speed", label: "Delivery speed" },
  { id: "quality", label: "Product quality" },
  { id: "politeness", label: "Politeness and competence of staff" },
  { id: "support", label: "Customer support" },
  { id: "overall-service", label: "Overall service" },
];

export default function Like() {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleChange = (id) => {
    setCheckedOptions((prevCheckedOptions) =>
      prevCheckedOptions.includes(id)
        ? prevCheckedOptions.filter((option) => option !== id)
        : [...prevCheckedOptions, id]
    );
  };

  return (
    <div className="flex flex-col">
      <h3 className="my-4 text-lg font-medium text-gray-700">
        What did you like?
      </h3>
      {options.map(({ id, label }) => (
        <label
          key={id}
          htmlFor={id}
          className="flex justify-between w-full items-center cursor-pointer border-b-2 border-gray-300 pb-4 mb-4"
        >
          <span className="text-base font-light">{label}</span>
          <input
            type="checkbox"
            id={id}
            className="hidden"
            checked={checkedOptions.includes(id)}
            onChange={() => handleChange(id)}
          />
          <span
            className={`flex h-5 w-5 rounded-full border-2 border-gray-300 items-center justify-center ${
              checkedOptions.includes(id)
                ? "bg-pink-500 text-white"
                : "bg-white"
            }`}
          >
            {checkedOptions.includes(id) && <Check size={20} />}
          </span>
        </label>
      ))}
    </div>
  );
}
