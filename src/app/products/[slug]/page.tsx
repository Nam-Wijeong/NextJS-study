import { getProduct } from '@/service/products';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { getProducts } from '@/service/products';
import Image from 'next/image';
import GoProductsButton from '@/app/components/GoProductsButton';
type Props = {
  params: {
    slug: string;
  }
}
export default async function ProductsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    // notFound();
    redirect('/products')
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={`/images/${product.image}`} alt={product.name} width={300} height={300} />
      <GoProductsButton />
    </>
  )
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것!(SSG)
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id
  }))
}