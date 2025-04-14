import { GiTerror } from "react-icons/gi";

const NotFound = () => {
  return <div className="flex min-h-svh flex-col items-center justify-center gap-6 font-bold bg-muted p-6 md:p-10 text-4xl">
    <GiTerror  className="w-64 h-64 bg-gray-200 rounded-full" />
    404 - Oops!
    <p className="flex text-center text-2xl">
      Looks like this page took a detour! It’s nowhere to be found. <br /> Try heading back, or take a break and enjoy some cat videos. 🐱
    </p>
  </div>;
};

export default NotFound;
