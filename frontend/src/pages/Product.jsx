import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
const [size,setSize] = useState('')
  const fetchProductData = () => {
    const item = products.find((p) => p._id === productId)
    if (item) {
      setProductData(item)
      setImage(item.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!productData) return <div className="opacity-0 h-20"></div>

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col-reverse sm:flex-row flex-1 gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-1/5 w-full gap-2">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className="w-1/4 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border rounded"
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-4/5">
            <img src={image} alt={productData.name} className="w-full h-auto rounded" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold text-3xl sm:text-4xl">{productData.name}</h1>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-1">
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            </div>
            <p className="text-sm text-gray-500">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-bold">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-600 md:w-4/5">{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            { productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size  ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
          </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm  w-40 active:bg-gray-700'>
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

<div className='mt-20'>
<div className='flex'>
<b className='border px-5 py-3 text-sm'>
Description
</b>
<p className='border px-5 py-3 text-sm'>
Reviews (122)
</p>
</div>
<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cul
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cul
</p>

</div>
</div>
<RelatedProducts 
  category={productData.category} 
  subCategory={productData.subCategory} 
/>

    </div>
  )
}

export default Product
