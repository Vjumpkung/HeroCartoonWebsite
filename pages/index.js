import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Head from "next/head";
import Link from "next/link";
import 'lazysizes'
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import { Fragment } from "react";
import Banner from "../components/Banner"
import Description from "../components/Description";
export default function Home({ data1, data2, data3 }) {
    return (
        <>
            <Head>
                <title>หน้าแรก - เสื้อยืด Hero Cartoon</title>
            </Head>
            <Banner />
            <Description />
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mt-2"></div>
            <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
                <h2 className="md:text-6xl font-black text-center py-3 text-5xl">
                    สินค้าล่าสุด
                </h2>
                <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
                    {
                        data1.map((item) => (
                            <div
                                key={item.id}
                                className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
                            >
                                <Link
                                    href="/products/[name]"
                                    as={`/products/${item.name}`}
                                    key={item.id}
                                >
                                    <a>
                                        <img
                                            data-src={
                                                "https://admin.herocartoontshirt.com" +
                                                item.picture.formats.small.url
                                            }
                                            width={item.picture.formats.small.width}
                                            height={item.picture.formats.small.height}
                                            alt={item.picture.name}
                                            className="object-fill w-full mx-auto lazyload"
                                        />
                                        <p className="text-center text-3xl font-bold">
                                            {item.name}
                                        </p>
                                        <p className="text-center text-xl">
                                            {item.description}
                                        </p>
                                        <p className="text-center text-sm text-gray-600 font-bold mb-3">รายละเอียดสินค้า</p>
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <Link href="/products">
                    <a>
                        <p className="text-center">
                            <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                                <p className="text-center text-2xl">ดูสินค้าทั้งหมด</p>
                            </button>
                        </p>
                    </a>
                </Link>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
            <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
                <h1 className=" text-3xl lg:text-5xl text-center py-3 font-black">
                    รีวิวจากลูกค้า
                </h1>
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="flex flex-wrap justify-center">
                            {data2.map((item) => (
                                <Fragment key={item.id}>
                                    {item.picture.slice(-4).map((object) => (
                                        <div
                                            key={object.id}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 py-2 max-w-max"
                                        >
                                            <img
                                                src={"https://admin.herocartoontshirt.com" + object.url}
                                                width={object.width}
                                                height={object.height}
                                                className="mx-auto square transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                                loading="lazy"
                                                alt={object.name}
                                            />
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                <Link href="/reviews">
                    <a>
                        <p className="text-center pt-2">
                            <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                                <p className="text-center text-2xl">ดูรีวิวทั้งหมด</p>
                            </button>
                        </p>
                    </a>
                </Link>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
            <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
                <h1 className=" text-3xl lg:text-5xl text-center py-3 font-black">
                    Gallery
                </h1>
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="flex flex-wrap justify-center">
                            {data3.slice(-1).map((item) => (
                                <>
                                    {item.picture.slice(-4).map((object) => (
                                        <div
                                            key={object.id}
                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 py-2 max-w-max"
                                        >
                                            <img
                                                src={"https://admin.herocartoontshirt.com" + object.url}
                                                width={object.width}
                                                height={object.height}
                                                className="mx-auto square transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                                loading="lazy"
                                                alt={object.name}
                                            />
                                        </div>
                                    ))}
                                </>
                            ))}
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                <Link href="/gallery">
                    <a>
                        <p className="text-center pt-2">
                            <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                                <p className="text-center text-2xl">ดูรูปภาพทั้งหมด</p>
                            </button>
                        </p>
                    </a>
                </Link>
            </div>
        </>
    )
}
export async function getServerSideProps() {
    //fetch recent product
    const { data } = await client.query({
        query: gql`
        query {
            kamenRiders(limit: 2, sort: "id:DESC") {
              id
              name
              picture {
                formats
              }
            }
            spCollections(limit: 2, sort: "id:DESC") {
              id
              name
              picture {
                formats
              }
            }
            umCollections(limit: 2, sort: "id:DESC") {
              id
              name
              picture {
                formats
              }
            }
            galleries {
                picture {
                  name
                  id
                  url
                  width
                  height
                }
              }
            reviews {
              id
              picture {
                url
              }
            }
          }          
      `,
    });
    const items1 = data.kamenRiders, items2 = data.spCollections, items3 = data.umCollections
    const mixProducts = [...items1, ...items2, ...items3]
    const mixReviews = data.reviews
    const mixGalleries = data.galleries
    return {
        props: {
            data1: mixProducts,
            data2: mixReviews,
            data3: mixGalleries
        },
    };
}