"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const categories = [
  "All",
  "Product Design",
  "Guesstimates",
  "Product Strategy",
  "Behavioral",
  "Analytics",
  "System Design",
  "Technical",
];

export default function Category() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleCategoryChange = (item: string) => {    
    const params = new URLSearchParams({ category: category });
    if (item !== "All") {
      params.set("category", item);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 lg:gap-4 flex-wrap">
      {categories.map((item, index) => (
        <button
          onClick={() => handleCategoryChange(item)}
          key={index}
          className={`px-4 py-2 border rounded text-sm font-medium ${
            category === item ? "bg-white text-black" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
