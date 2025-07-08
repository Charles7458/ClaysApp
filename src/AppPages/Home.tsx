
import '../styles/home.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stars from '../components/Stars';


function ProductPlaceholder(){
    return(
        <div className='bg-light border rounded-2xl justify-self-center' style={{maxWidth:'300px'}}>
            <div className='h-38 w-56 rounded-2xl'></div>
            <div className='px-4'>
                <div className='placeholder h-6 w-full mb-4'></div>
                <div className='flex'>
                    <div className='placeholder inline-block h-6 w-[50%] mb-4 me-1'></div>
                    <div className='placeholder inline-block h-6 w-[50%] mb-4'></div>
                </div>
            </div>
        </div>
    )
}


function ProductCard(prop: {name: string, price: number, review: number, img: string}){
    
    return(
        <div className="min-w-[100px] w-[30vw] md:w-[200px]">
            <img src={prop.img} className='h-[100px] md:h-[150px] w-full'/>
            <h5 className='font-bold my-1 text-ellipsis' title={prop.name}>{prop.name}</h5>
            <h4 className='text-lg my-1'>₹{prop.price}</h4>
            <Stars review={prop.review} />
        </div>
    )
}


export default function Home(){

    interface productDetails {
        prodName: string,
        price: number,
        category: string,
        review: number,
        image: string,
        }
    
    const productData = [
        // {
        //     id: 101,
        //     name:"Sekiro Healing Flask | 500ml",
        //     price: 799,
        //     review: 4,
        //     image: "healingGourd",
        //     category: "Sekiro Gourd"
        // },
        {
            id:102,
            prodName: "Portable Clay Bottle | 500ml",
            price: 399,
            review:3,
            image: "https://res.cloudinary.com/di8qosyeh/image/upload/v1750743345/Clay_20Water_20Bottle1623310240-600x600_wygr1j.jpg",
            category: "clay bottle"
        },
        { 
            id: 103,
            prodName: "Painted Clay Bottle | 500ml",
            price: 500,
            review: 4,
            image: "https://res.cloudinary.com/di8qosyeh/image/upload/v1750743344/artwork_605f8016-c5b0-4cbc-bff4-fc7eabc6d942_cikg2a.png",
            category: "clay bottle"
        }
    ]
    

    const [status,setStatus] = useState("loading");
    const [products, setProducts] = useState<productDetails[]>(productData)
    

    useEffect(()=>{
        async function fetchProducts(){
            // const productList = await axios.get("http://localhost:8080/product/getAll")
            // console.log(productList)
            // setProducts(productList.data)
            setStatus("success")
        }

        fetchProducts()     
    },[])

    if(status=="loading")
    return(
        <div  style={{minHeight:"100vh"}}>
            <h1 className='tag-line mb-8 font-bold text-lg md:text-4xl'>Get everyday clay products for your home</h1>
            <div className='products-grid mx-lg-5 row-gap-3 col-gap-0'>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
            </div>
        </div>
    )

    if(status=="failed") {
        return(
            <div  style={{minHeight:"100vh"}}>
                <h1 className='tag-line mb-5 font-bold text-sm md:text-4xl'>Get everyday clay products for your home</h1>
                <p>Couldn't load the products</p>
            </div>
        )
    }

    if(status=="success"){
        return(
            <div className='px-2 min-h-[100vh] overflow-x-clip'>
                <h1 className='tag-line font-bold text-[27px] md:text-4xl mb-5'>Get everyday clay products for your home</h1>
                <div className='products-grid m-5 gap-0'>
                    { products.map(product =>{
                        if(product.category.includes("clay"))
                        return <ProductCard name={product.prodName} price={product.price} review={product.review} img={product.image} />
                    })}
                </div>
                <h2 className="text-2xl font-bold">Explore our exclusive Sekiro gourd collection</h2>
                <div className='products-grid m-5 row-gap-3 col-gap-0'>
                    { products.map(product =>{
                            if(product.category.includes("Sekiro"))
                            return <ProductCard name={product.prodName} price={product.price} review={product.review} img={product.image} />
                        })}
                </div>
            </div>
        )
    }


}