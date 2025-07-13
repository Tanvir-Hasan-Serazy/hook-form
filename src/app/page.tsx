import Image from "next/image";
import Register from "./register/page";

export default function Home() {
  return (
    <>
      <div className="lg:mx-auto lg:max-w-[560px] lg:min-h-[600px] min-h-[450px] border border-gray-950 lg:mt-10 mt-7 rounded-xl mx-4 px-4">
        <Register />
      </div>
    </>
  );
}
