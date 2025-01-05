import { FileText, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RecipeCreator: React.FC = () => {
  const [input, setInput] = useState<string>(""); // User input for name or link

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const router = useRouter();
  const handleCreateRecipe = () => {
    const urlRegex = /^(https?:\/\/[^\s]+)/;
    if (urlRegex.test(input)) {
      // Handle link-based recipe
      handleLinkInput(input);
    } else if (input.trim()) {
      // Redirect to upload page with recipe name
      router.push(`/upload?name=${encodeURIComponent(input.trim())}`);
    }
  };

  const handleLinkInput = (link: string) => {
    // Simulate extracting data from a link (this would be replaced with real API logic)
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="text"
        placeholder="Enter a link or new recipe name"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleCreateRecipe()}
        className="w-full p-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring focus:ring-green-300"
      />
      <div className="flex gap-2">
        <div className="relative group">
          <Video className="w-5 h-5 text-gray-600" />
          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 -bottom-16 left-1/2 transform -translate-x-1/2 w-48 text-center pointer-events-none user-select-none z-50">
            Supported: TikTok, Instagram Reels
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-gray-800" />
          </div>
        </div>
        <div className="relative group">
          <FileText className="w-5 h-5 text-gray-600" />
          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 -bottom-16 left-1/2 transform -translate-x-1/2 w-48 text-center pointer-events-none user-select-none z-50">
            Supported: Food blogs, Recipe websites
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCreator;
