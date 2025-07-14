import Image from "next/image";
import Register from "./register/page";
import Login from "./login/page";

export default function Home() {
  return (
    <>
      <div className="">
        {/* <Register /> */}
        <Login />
      </div>
    </>
  );
}
