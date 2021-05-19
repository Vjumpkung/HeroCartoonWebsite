import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { useRouter } from "next/router";
import SizeChart from "../../components/SizeChart";
import Details from "../../components/Details";
import Head from "next/head";
import { imgLink } from "../../lib/constant";

function MRSPUMCollections({ items }) {
    const router = useRouter();
    if (router.isFallback)
        return (
            <>
                <div className="md:container md:mx-auto">
                    <button className="spinner"></button>
                </div>
            </>
        );
    // Render post...
    return (
        <SimpleReactLightbox>
            <Head>
                <title>{items.name} - เสื้อยืด Hero Cartoon</title>
            </Head>
            <div className="xl:container xl:mx-auto">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mt-2"></div>
                <div className="md:flex md:flex-wrap  justify-center items-center">
                    <div className="my-5 w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
                        <SRLWrapper>
                            <a
                                href={
                                    imgLink +
                                    items.picture.url
                                }
                            >
                                <>
                                    <img
                                        src={
                                            imgLink +
                                            items.picture.formats.small.url
                                        }
                                        width={items.picture.formats.small.width}
                                        height={items.picture.formats.small.height}
                                        alt={items.picture.name}
                                        className=" w-4/5 mx-auto"
                                        loading="lazy"
                                    ></img>
                                </>
                            </a>
                        </SRLWrapper>
                    </div>
                    <div className="my-5  w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
                        <h1 className="text-6xl font-bold text-center">
                            {items.name}
                        </h1>
                        <h2 className="text-center text-2xl mb-2">
                            {items.description}
                        </h2>
                        <Details />
                    </div>
                    <SizeChart />
                </div>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
            </div>
        </SimpleReactLightbox>
    );
}

export const getStaticProps = async ({ params }) => {
    //data fetching
    const { data } = await client.query({
        query: gql`
    query {
        kamenRiders{
          id
          name
          picture {
            url
            formats
          }
        }
        spCollections{
          id
          name
          picture {
            url
            formats
          }
        }
        umCollections{
          id
          name
          picture {
            url
            formats
          }
        }
    }
    `,
    });
    //parsing
    const MR = data.kamenRiders , SP = data.spCollections , UM = data.umCollections;
    const allProducts = [...MR,...SP,...UM]
    const products_data = allProducts.filter((p) => p.name.toString() === params.name);
    return {
        props: {
            items: products_data[0],
        },
        revalidate: 1, // In seconds
    };
};

export const getStaticPaths = async () => {
    //data fetching
    const { data } = await client.query({
        query: gql`
        query {
            kamenRiders{
              id
              name
              picture {
                formats
              }
            }
            spCollections{
              id
              name
              picture {
                formats
              }
            }
            umCollections{
              id
              name
              picture {
                formats
              }
            }
        }
    `,
    });
    const MR = data.kamenRiders , SP = data.spCollections , UM = data.umCollections;
    const allProducts = [...MR,...SP,...UM]
    const paths = allProducts.map((allProducts_paths) => ({
        params: { name: allProducts_paths.name.toString() },
    }));

    return { paths, fallback: false };
};

export default MRSPUMCollections;
