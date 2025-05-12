import React, { useEffect, useRef, useState } from "react";
import { languages } from "../languagesData";

const TranslatorApp = ({ onClose }) => {
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] =
    useState(null);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;
  const dropDownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setShowLanguages(false);
    }
  };

  useEffect(() => {
    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);

  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type);
    setShowLanguages(true);
  };

  const handleLanguagesSelect = (languageCode) => {
    if (currentLanguageSelection === "from") {
      setSelectedLanguageFrom(languageCode);
    } else {
      setSelectedLanguageTo(languageCode);
    }

    setShowLanguages(false);
  };

  const handleSwapLanguages = () => {
    setSelectedLanguageFrom(selectedLanguageTo);
    setSelectedLanguageTo(selectedLanguageFrom);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setInputText(value);
      setCharCount(value.length);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}!&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`
    );

    const data = await response.json();
    setTranslatedText(data.responseData.translatedText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslate();
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center relative pb-6 pt-12 px-6 sm:px-8">
      <button className="absolute top-4 right-4">
        <i
          className="fa-solid fa-xmark text-xl text-gray-300 cursor-pointer"
          onClick={onClose}
        ></i>
      </button>

      <div
        className="w-full min-h-20 flex justify-center items-center bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg"
        style={{ paddingLeft: "1rem" }}
      >
        <div className="language" onClick={() => handleLanguageClick("from")}>
          {languages[selectedLanguageFrom] || "English"}
        </div>
        <i
          className="fa-solid fa-arrows-rotate text-2xl cursor-pointer"
          style={{ marginLeft: "2rem", marginRight: "2rem" }}
          onClick={handleSwapLanguages}
        ></i>
        <div className="language" onClick={() => handleLanguageClick("to")}>
          {languages[selectedLanguageTo] || "English"}
        </div>
      </div>

      {showLanguages && (
        <div
          className="w-[calc(100%-4rem)] max-h-[300px] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute z-10 rounded shadow-lg overflow-y-auto scrollbar-hide"
          style={{ top: "8rem", left: "2rem", padding: "1rem" }}
          ref={dropDownRef}
        >
          <ul>
            {Object.entries(languages).map(([code, name]) => (
              <li
                className="cursor-pointer hover:bg-[#10646b] transition duration-200 rounded"
                style={{ padding: "0.5rem" }}
                key={code}
                onClick={() => handleLanguagesSelect(code)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-full relative">
        <textarea
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
          className="textarea text-gray-200"
          value={inputText || ""}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>

        <div className="absolute bottom-2 right-4 text-gray-400">
          {charCount}/{maxChars}
        </div>
      </div>

      <button
        onClick={handleTranslate}
        className="w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 flex justify-center items-center active:translate-y-[1px]"
      >
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      <div className="w-full">
        <textarea
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
          className="textarea text-[#b6f492]"
          value={translatedText || ""}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default TranslatorApp;
