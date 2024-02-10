"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null); // Corrected typo in `searcRef` to `searchRef`
  const router = useRouter();

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!searchRef.current?.value) return; // Check if the input is empty
    const key = searchRef.current.value; // Get the value directly without optional chaining as we've already checked it's not null
    router.push(`/search/${key}`); // Navigate to the search page
  };

  return (
    <form className="relative" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Cari Anime..."
        className="p-2 rounded w-full"
        ref={searchRef} // Use the ref for accessing the input value
      />
      <button
        type="submit" // Specify button type as submit for form submission
        className="absolute top-2 end-2"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default InputSearch;
