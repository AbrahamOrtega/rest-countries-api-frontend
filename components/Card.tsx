import Image from "next/image";
import Link from "next/link";

export default function Card(props: {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}) {
  return (
    <Link
      href={`/name/${props.name}`}
      className="flex flex-col w-[300px] h-fit rounded-md shadow-md bg-white dark:bg-darkBlue cursor-pointer"
    >
      <div className="flex w-full pb-[60%] relative">
        <Image
          src={props.flag}
          alt={props.name}
          width={1000}
          height={1000}
          className="absolute w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col p-6 text-veryDarkBlue2 dark:text-white">
        <h2 className="text-[18px] font-[700] line-clamp-1">{props.name}</h2>
        <p className="text-[14px] mt-2">
          <span className="font-[600]">Population:</span> {props.population}
        </p>
        <p className="text-[14px]">
          <span className="font-[600]">Region:</span> {props.region}
        </p>
        <p className="text-[14px] line-clamp-1">
          <span className="font-[600]">Capital:</span> {props.capital}
        </p>
      </div>
    </Link>
  );
}
