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
    const ccart = JSON.parse(localStorage.getItem('cart') || "[]");
    const cartContext = useCartContext();
      if (!cartContext) {
        return <div>Loading...</div>;
      }
      const { cart, setCart, authToken } = cartContext;
      
      const [data, setData] = useState<ProtectedDataResponse>();
      
      useEffect(() => {
        setCart(ccart)
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
    const [loading, setLoading] = useState<boolean>(false)
    
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
    
    useEffect(()=>{
        if(name && address && postalCode && locality && state && state && country && eamil && phone){
            setActive(true)
        }
    })

    function onchangeeee(){
        setProfile((prev) => !prev);
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
            setLoading(true)
            localStorage.setItem('order', JSON.stringify(order))
            localStorage.setItem('shipment', JSON.stringify(shipment))
            if(profile){
                const userId = data?.user.id;
                const doc = await client.fetch(`*[_type == "user" && userId == $userId][0]`,{userId})
                await client.patch(`${doc._id}`).set({address:address}).set({phoneNo:phone}).commit()
            }
            const response = await fetch(`/api/checkout`,{
                method:"POST",
                body:JSON.stringify({cart})
            })
            const dataa = await response.json();
            if (dataa.url) {
                window.location.href = dataa.url; // Redirect to Stripe Checkout
            } else {
                alert("Payment failed!");
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <section className='font-inter pt-10 relative'>
        {loading && <div className='absolute top-0 w-full h-full flex justify-center items-center bg-white opacity-60'>
            <div role="status">
                <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>}
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
                        <button type='submit' disabled={loading} className={`sm:w-[440px] mt-4 w-full h-[60px] rounded-full ${active ? 'bg-black text-white' : 'bg-[#F5F5F5]'}`}>Continue</button>
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
