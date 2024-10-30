import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Dropdown(props: {
  region: string;
  setRegion: (region: string) => void;
  showDropdown: boolean;
  setShowDropdown: (showDropdown: boolean) => void;
}) {
  const handleDropdown = () => {
    props.setShowDropdown(!props.showDropdown);
  };

  return (
    <div
      className="flex px-5 py-3 shadow dark:bg-darkBlue text-veryDarkBlue2 dark:text-white rounded-md items-center relative cursor-pointer text-[14px] dark:hover:bg-gray-600 hover:bg-gray-200"
      onClick={handleDropdown}
    >
      <span>{props.region || "Filter by Region"}</span>
      {props.showDropdown ? (
        <IoIosArrowUp className="text-[24px] ml-8" />
      ) : (
        <IoIosArrowDown className="text-[24px] ml-8" />
      )}
      <div
        className={`${
          props.showDropdown ? "flex" : "hidden"
        } flex-col w-full absolute top-14 left-0 bg-white dark:bg-darkBlue text-veryDarkBlue2 dark:text-white rounded-md cursor-default shadow-md z-10`}
      >
        <ul className="flex flex-col text-[14px]">
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("Africa")}
          >
            Africa
          </li>
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("America")}
          >
            America
          </li>
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("Asia")}
          >
            Asia
          </li>
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("Europe")}
          >
            Europe
          </li>
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("Oceania")}
          >
            Oceania
          </li>
          <li
            className="py-3 px-5 rounded-md cursor-pointer dark:hover:bg-slate-700 hover:bg-gray-200"
            onClick={() => props.setRegion("")}
          >
            Default
          </li>
        </ul>
      </div>
    </div>
  );
}
