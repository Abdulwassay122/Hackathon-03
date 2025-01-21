"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cart from "./assets/Buy 2.svg";
import { client } from "@/sanity/lib/client";
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";
import AmazonLoader from "@/components/Loader/SkeletonLoader";
import ResponsiveLoader from "@/components/Loader/SkeletonloaderResponsive";
import { useCartContext } from "@/app/Contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedProduct from "@/components/Products/RelatedProduct";

interface PageProps {
  params: Params;
}

interface Params {
  id: string;
}

interface Product {
  productName: string;
  status: string;
  category: string;
  description: string;
  _id: string;
  imageUrl: string;
  colors: [string];
  price: number;
  inventory: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  sizes: [string];
}

export interface cartItem {
  quantity: number;
  productId: string;
  productName: string;
  description: string;
  category: string;
  price: number;
  totalprice: number;
  image: string;
  color: string;
  size: string;
}

export default function productDetail({ params: { id } }: PageProps) {
  const [data, setData] = useState<Product>();
  const [color, setColor] = useState<string>();
  const [size, setSize] = useState<string>();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const cartContext = useCartContext();
  if (!cartContext) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  const { addToCart } = cartContext;

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const item = await client.fetch(`*[_type == 'product' && _id == '${id}']{
  status,
  "imageUrl": image.asset->url,
  colors,
  _id,
  category,
  description,
  inventory,
  productName,
  price,
  discountPercentage,
  rating,
  ratingCount,
  sizes
    }
    `);
    setData(item[0]);
    setColor(`${item[0].colors[0]}`);
    setSize(`${item[0].sizes[0]}`);
    setLoading(false);
  }



  function addToCartt(){
    const cartItem = {
      quantity: qty,
      productId: id,
      productName: data ? data.productName : '',
      description: data ? data.description : '',
      category: data ? data.category : '',
      price: data ? data.price : 0,
      totalprice: data ? data.price * qty : 0,
      image: data ? data.imageUrl : '',
      color: color || '',
      size: size || '',
    }
    addToCart(cartItem);
    setTimeout(() => {
      toast.success("Item added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }, 500);
  }

// Rating Function ---------------------

  function ratingSystem(Rating: number) {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (Rating >= i + 1) {
        // Full star
        stars.push(<Image key={i} className="h-8 w-8" src={star} alt="" />);
      } else if (Rating > i && Rating < i + 1) {
        // Half star
        stars.push(
          <Image key={i} className="h-8 w-8" src={graystarhalf} alt="" />
        );
      } else {
        // Gray star
        stars.push(<Image key={i} className="h-8 w-8" src={graystar} alt="" />);
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  }


  return (
    <>

      {loading && (
        <>
          <div className="md:block hidden pt-[20px] pb-[62px]">
            <AmazonLoader/>
          </div>
          <div className="md:hidden block pt-[60px] pb-[262px]">
            <ResponsiveLoader/>
          </div>
        </>
      )}
      {!loading && (
        <>
        <section className="flex xl:gap-[100px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[100px]">
          <Image
            className="sm:h-[550px] h-auto  w-full sm:w-[550px]"
            width={600}
            height={600}
            src={data?.imageUrl || ""}
            alt=""
          />
          <div className="flex flex-col gap-8">
            <h1 className="sm:text-[48px] text-[32px] font-[500] leading-[48px]">
              {data?.productName}
            </h1>
            <p className="text-[15px] leading-7 1160:w-[330px]">
              {data?.description}
            </p>
            <div className="flex flex-col gap-">
              <div className="flex gap-2 items-center h-[55px]">
                <p className="text-[20px] font-[500]">Colors :</p>
                {data?.colors.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className={` ${color === ele ? "border-2" : ""} border-gray-600 rounded-md`}
                    >
                      <button
                        onClick={() => setColor(ele)}
                        className={`bg-gray-100 text-[15px] py-1 px-4 border-[3px] rounded-md border-white`}
                      >
                        {ele}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 items-center h-[55px]">
                <p className="text-[20px] font-[500]">Sizes :</p>
                {data?.sizes.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className={` ${size === ele ? "border-2" : ""} border-gray-600 rounded-md`}
                    >
                      <button
                        onClick={() => setSize(ele)}
                        className={`bg-gray-100 text-[15px] py-1 px-4 border-[3px] rounded-md border-white`}
                      >
                        {ele}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <p className="text-[#9E3500] pl-1">
              {data ? `Ratings ${data.ratingCount}` : ""}
            </p> */}
            <div className="flex 450:flex-row flex-col 450:gap-16 gap-5 justify-between">
              <div className="flex flex-col gap-8 justify-between">
                <div className="flex gap-4 items-center">
                  {data && ratingSystem(data.rating)}
                  <p className="text-[20px]">
                    {data ? `(${data.rating})` : ""}
                  </p>
                </div>
                <div className="flex gap-5 items-end">
                  <s className="sm:text-[22px] text-[18px] text-red-600 w-fit">
                    ₹{" "}
                    {data
                      ? (
                          (data?.price / (1 - data.discountPercentage / 100)) *
                          qty
                        ).toFixed(2)
                      : ""}
                  </s>
                  <div className="relative ">
                    <p className="sm:text-[36px] text-[28px] leading-8 w-fit">
                      ₹ {data ? data?.price * qty : ""}
                    </p>
                    <p className="absolute bg-gray-700 rounded-full text-white -top-4 -right-8 px-2 text-[11px]">
                      -{data?.discountPercentage}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 wfull justify-end 450:items-end items-start">
                <div className="border-[1px] flex w-[174px] items-center  justify-between rounded-full">
                  <button
                    onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                    className="pl-6 text-[25px] text-gray-800"
                  >
                    -
                  </button>
                  <p className="text-[20px] p-auto border-x-[1px]  h-full text-gray-800 px-5 leading-10">
                    {qty}
                  </p>
                  <button
                    onClick={() =>
                      setQty(
                        qty < (data?.inventory ?? Infinity) ? qty + 1 : qty
                      )
                    }
                    className="pr-6 text-[25px] text-gray-800"
                  >
                    +
                  </button>
                </div>
                <div className="relative flex items-center">
                    <button onClick={addToCartt} className="bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full">
                      Add To Cart
                    </button>
                  <Image className="absolute left-5" src={cart} alt="" />
                </div>
              </div>
            </div>
          </div>


          

          <ToastContainer />
        </section>
          {/* ----------- Related Products ------------ */}
          <RelatedProduct catagory={data?data.category:''} id={data?data._id:''}/>
          </>)}

    </>
  );
}
