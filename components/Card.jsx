import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { formatter } from "../utils/Formatter";

function Card({ data }) {
  const { products } = useSelector((state) => state.cart);
  const checkIfAlreadyAdded = () => {
    let item = products.find((d) => d._id === data._id);
    if (item) {
      return true;
    }
    return false;
  };
  return (
    <Link href={`/products/${data?._id}`} className="group">
      <div className="w-full text-center relative">
        <span className="absolute top-3 left-3 z-10 flex items-center space-x-2">
          {checkIfAlreadyAdded() && (
            <span className="bg-[#ff2a00] rounded-lg text-xs opacity-70 px-3 py-1 block text-white ">
              In Bag
            </span>
          )}
          {!data?.inStock && (
            <span className="bg-black rounded-lg text-xs opacity-70 px-3 py-1 block text-white ">
              Out of Stock
            </span>
          )}
        </span>
        <span className="relative block w-full h-72 group bg-gray md:h-80 lg:h-96">
          {data?.productImage && (
            <Image
              fill
              src={data?.productImage}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="image"
              className="object-contain object-center transition-all duration-500 group-hover:opacity-0"
            />
          )}
          {data?.productImage2 && (
            <Image
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              src={data?.productImage2}
              alt="image"
              className="object-contain object-center transition-all duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </span>
        <span>
          <h3 className="mt-4 text-xs transition-all duration-150 md:text-sm">
            {data?.name}
          </h3>
          <p className="mt-3 text-xs md:text-sm">
            {data?.discountedPrice !== data?.originalPrice &&
              `${formatter.format(data?.discountedPrice)} from `}{" "}
            <span
              className={`${
                data?.discountedPrice !== data?.originalPrice
                  ? "line-through"
                  : ""
              }`}
            >
              {formatter.format(data?.originalPrice)}
            </span>
          </p>
        </span>
      </div>
    </Link>
  );
}

export default Card;
