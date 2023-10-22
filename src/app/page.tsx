import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Image width={400} height={500} src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='shop' />
    </>
  )
}
