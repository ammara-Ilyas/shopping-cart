import Image from "next/image";
import logo from "../../image/logo.jpg";
import Icon from "../../image/cart.jpg";
export default function Home() {
  return (
    <>
      <div>
        <nav className=" border-4	grid grid-cols-6 grid-rows-1 ">
          <div className="col-span-2">
            <Image src={logo} alt="logo" height={50} width={50} />
          </div>
          <div className="col-span-5">
            <Image src={Icon} alt="cart-icon" height={50} width={50} />
          </div>
        </nav>
      </div>{" "}
    </>
  );
}
