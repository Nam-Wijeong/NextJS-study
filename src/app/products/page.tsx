import Link from 'next/link'
import React from 'react'
import { getProducts } from '@/service/products';
import Image from 'next/image';
import clothes from '../../../public/images/clothes.jpg';
export default async function ProductsPage() {
  // throw new Error();
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothes} alt='clothes' priority />
      <ul>
        {
          products.map(({ id, name }, index) => {
            return (
              <li key={index}>
                <Link href={`/products/${id}`}>{name}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
