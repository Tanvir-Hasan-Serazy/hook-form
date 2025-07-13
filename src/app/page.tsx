import Image from "next/image";
import Register from "./register/page";

export default function Home() {
  return (
    <>
      <div className="lg:mx-auto lg:max-w-[560px] lg:min-h-[680px] min-h-[450px] border border-gray-950 lg:mt-2 lg:mb-7 mt-2 mb-5 rounded-xl mx-4 px-4">
        <Register />
      </div>
    </>
  );
}
