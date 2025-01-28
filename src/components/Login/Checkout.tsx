"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import Image from "next/image";
import location from './assets/Frame (20).svg'
import img1 from './assets/Image (12).svg'
import img2 from './assets/Image (13).svg'
import img3 from './assets/Image (14).svg'
import img4 from './assets/Image (15).svg'
import img5 from './assets/Image (16).svg'
import img6 from './assets/Image (17).svg'
import img7 from './assets/Image (18).svg'
import img8 from './assets/Image (19).svg'
import img9 from './assets/Image (20).svg'
import img10 from './assets/Image (21).svg'
import img11 from './assets/Image (22).svg'
import { useCartContext } from '@/app/Contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';
import { client } from '@/sanity/lib/client';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';

interface ProtectedDataResponse {
    message: string;
    user: {
      id: string;
      email: string;
      iat: number; // Issued at (timestamp)
      exp: number; // Expiration (timestamp)
    };
  }

export default function Checkout() {
    const router = useRouter()

    const cartContext = useCartContext();
      if (!cartContext) {
        return <div>Loading...</div>;
      }
      const { cart, authToken } = cartContext;

    const [data, setData] = useState<ProtectedDataResponse>();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/protected', {
            method:'POST',
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          const responseData = await response.json();
          setData(responseData);
        } catch (error) {
          console.error('Error fetching protected data', error);
        }
      };
      fetchData();
    }, [authToken]);

    // Subtotal 
    const datat = cart
let subTotal = 0 
for(let i=0; i<datat.length; i++){
  subTotal += datat ? Number(datat[i].totalprice) : 0
}

    // Sattes 
    const [active, setActive] = useState<boolean>(false)
    
    const [profile, setProfile] = useState<boolean>(false)

    const [name, setName] = useState<string>()
    const [address, setAddress] = useState<string>()
    const [postalCode, setPostalCode] = useState<string>()
    const [locality, setLocality] = useState<string>()
    const [state, setState] = useState<string>()
    const [country, setCountry] = useState<string>()
    const [eamil, setEmail] = useState<string>()
    const [phone, setPhone] = useState<number>()
    const orderId = uuidv4();
    const shipId = uuidv4();
    const [err, setErr] = useState<string>()

    useEffect(()=>{
        if(name && address && postalCode && locality && state && state && country && eamil && phone){
            setActive(true)
        }
    })

    function onchangeeee(){
        profile===false?setProfile(true):setProfile(false)
    }

    async function onSubmit(e:FormEvent<HTMLFormElement>){
        if(!name && !address && !postalCode && !locality && !state && !state && !country && !eamil && !phone){
            e.preventDefault();
            alert('Fill out all the feilds.')
            return
        }
        if(cart.length === 0){
            e.preventDefault();
            alert('Cart is Empty.')
            return
        }
        e.preventDefault();
        const today = new Date();
        const futureDate = new Date();
futureDate.setDate(today.getDate() + 8);
        const order = {
            _type:'orders',
            orderId,
            userId:data?.user.id,
            products: cart.map((ele) => ({
                orderStatus: 'Placed',
                orderDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
                estimatedDelivery: `${futureDate.getMonth() + 1}/${futureDate.getDate()}/${futureDate.getFullYear()}`,
                quantity: ele.quantity,
                productId: ele.productId,
                productName: ele.productName,
                description: ele.description,
                category: ele.category,
                price: ele.price,
                totalprice: ele.totalprice,
                image: ele.image,
                color: ele.color,
                size: ele.size,
            }))
            }
        const shipment = {
            _type:'shipment',
            shipId,
            orderId,
            status:'In Transit',
            exptDate: `${futureDate.getMonth() + 1}/${futureDate.getDate()}/${futureDate.getFullYear()}`,
            customerName:name,
            customerAddress:address,
            postalcode:postalCode,
            locality:locality,
            state:state,
            country:country,
            eamil:eamil,
            phone:phone
        }

        try {
            const orderResponse = await client.create(order)
            const shipmentResponse = await client.create(shipment)
            cart.map(async(ele)=>{
                await client.patch(ele.productId).inc({inventory: -1}).commit();
            })
            if(profile){
                const userId = data?.user.id;
                const doc = await client.fetch(`*[_type == "user" && userId == $userId][0]`,{userId})
                const userResponse  = await client.patch(`${doc._id}`).set({address:address}).set({phoneNo:phone}).commit()
            }
            setTimeout(() => {
                  toast.success("Order Placed Successfully", {
                    position: "top-center",
                    autoClose: 3000,
                  });
                }, 500);
                setTimeout(() => {
                    router.push(`/cart`)
                  }, 3500);
            return 'successfull'
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className='font-inter pt-10'>
              <ToastContainer />

        {/* header */}
        {/* <div className='pl-[91px] flex justify-between h-[72.8px] items-center'>
            <Link href="/"><Image src={nike} alt="" /></Link>
            <div className='w-[249px] flex gap-10'>
                <p className='text-[14px] leading-6 text-[#111111] mr-[6px]'>000 800 100 9538</p>
                <Image src={inbox} alt="" />
                <Link href="/cart"><Image src={bag} alt="" /></Link>
            </div>
        </div> */}
        {/* body */}
        <div className='flex 1160:gap-[120px] gap-10 1400:pl-[289px] 1400:pr-[242px] lg:px-28 px-10 900:flex-row flex-col pb-[72px]'>
            <div className='flex flex-col gap-6 pb-[100px]'>
                <div className=' flex flex-col gap-3'>
                    <h3 className='text-[21px] leading-6'>How would you like to get your order?</h3>
                    <p className='text-[15px] text-[#757575] 450:w-[427px] leading-6'>Customs regulation for India require a copy of the recipient&quot;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                </div>
                <form onSubmit={onSubmit} className=''>
                    <h3 className='text-[21px] my-5 leading-6 font-[500]'>Enter your name and address:</h3>
                    <div className='flex flex-col gap-8 pb-8'>
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Full Name' />
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address Line 1' />
                        <span className='flex gap-4'>
                        <input className='450:w-[211px]  w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}} placeholder='Postal Code' />
                        <input className='450:w-[211px] w-full  h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" value={locality} onChange={(e)=>{setLocality(e.target.value)}} placeholder='Locality' />
                        </span>
                        <span className='flex gap-4'>                      
                          <input value={state} onChange={(e)=>{setState(e.target.value)}} className='450:w-[211px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='State/Provience' />
                          <input value={country} onChange={(e)=>{setCountry(e.target.value)}} className='450:w-[211px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Country' />
                        </span>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <span className='flex gap-3 items-center'><input onChange={onchangeeee} className='h-[18px] w-[18px]' type="checkbox" /><label  className='text-[15px] leading-6 text-[#111111]' htmlFor="input">Save this address to my profile</label></span>
                    </div>
                    <div>
                        <h4 className='text-[21px] leading-6 font-[500] my-5 '>What&quot;s your contact information?</h4>
                        <div className=''>
                        <input value={eamil} onChange={(e)=>{setEmail(e.target.value)}} className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Email' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6'>A confirmation email will be sent after checkout.</p>
                        </div>
                        <div className=''>
                        <input value={phone} onChange={(e)=>{setPhone(Number(e.target.value))}} className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="number" placeholder='Phone Number' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6'>A confirmation email will be sent after checkout.</p>
                        </div>
                    </div>
                    {/* <div>
                        <h4 className='text-[21px] leading-6 font-[500] my-5 '>What&quot;s your PAN?</h4>
                        <div className=''>
                        <input className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='PAN' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6 450:w-[376px]'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                        </div>
                        <span className='flex gap-3 items-center my-3'><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[11px] leading-6 text-[#757575]' htmlFor="input">Save PAN details to Nike Profile</label></span>
                    </div> */}
                        {/* <span className='flex gap-3 my-14 '><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[11px] leading-6 text-[#757575] 450:w-[404px]' htmlFor="input">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label></span> */}
                        <button type='submit' className={`sm:w-[440px] mt-4 w-full h-[60px]  rounded-full ${active ? 'bg-black text-white' : 'bg-[#F5F5F5]'}`}>Continue</button>
                        <div className='flex flex-col gap-7 mt-7'>
                            <p className='text-[20px] leading-6 font-[500]'>Delivery</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Shipping</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Billing</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Payment</p>
                        </div>
                </form>
            </div>

            <div className='w-[320px] h-[721px]'>
                <h2 className='text-[20px] leading-6 font-[500] mt-5'>Order Summary</h2>
                <div className=''>
                    <div className='mt-3 gap-3 flex flex-col'>
                        <div>
                        <div className='flex justify-between h-[34px] items-center'>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>Subtotal</p>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>₹ {subTotal}</p>
                        </div>
                        <div className='flex justify-between h-[34px] items-center'>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>Subtotal</p>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>₹ {subTotal}</p>
                        </div>
                        </div>
                        <div className=''>
                        <div className='flex justify-between h-[54px] border-y-2 border-[#E5E5E5] border-solid items-center'>
                            <p className='text-[15px] font-[500] leading-4'>Subtotal</p>
                            <p className='text-[15px] font-[500] leading-4'>₹ {subTotal}</p>
                        </div>
                        </div>
                    </div>
                    <p className='text-[9px] leading-6 mt-[18px] mb-[26px]'>(The total reflects the price of your order, including all duties and taxes)</p>
                    <div className='h-[474px] flex flex-col gap-2'>
                        <h3 className='text-[15px] font-[700] leading-6'>Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
                        {datat.map((ele, index)=>{ return(<div key={index} className='h-[208px] flex gap-3'>
                            <Image className='h-[200px] w-[200px]' height={300} width={300} src={ele.image} alt="" />
                            <div className='flex flex-col gap-1'>
                                <p className='text-[13px] text-[#111111] leading-6'>{ele.productName}</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Qty {ele.quantity}</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Size {ele.size}</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>₹ {ele.price}</p>
                            </div>
                        </div>)})}
                        {/* <div className='h-[208px] flex gap-3'>
                            <Image src={pic2} alt="" />
                            <div className=''>
                                <p className='text-[13px] text-[#111111] leading-6'>Nike Dri-FIT ADV TechKnit Ultra Men&quot;s Short-Sleeve Running Top</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Qty 1</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Size L</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>₹ 3 895.00</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className='1160:h-[51px] h-full flex 1160:flex-row flex-col justify-between bg-[#111111] px-5'>
            <div className='flex items-center'>
                <div className='flex gap-6 items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={location} alt="" />
                        <p className='text-[9px] text-[#ffffff] leading-6'>India</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>© 2023 NIKE, Inc. All Rights Reserved</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Terms of Use</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Terms of Sale</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-nowrap flex-wrap gap-2'>
                <Image src={img1} alt="" />
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
                <Image src={img4} alt="" />
                <Image src={img5} alt="" />
                <Image src={img6} alt="" />
                <Image src={img7} alt="" />
                <Image src={img8} alt="" />
                <Image src={img9} alt="" />
                <Image src={img10} alt="" />
                <Image src={img11} alt="" />
            </div>
        </div>
    </section>
  )
}
