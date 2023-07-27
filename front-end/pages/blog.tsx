import BlogItem from "@/components/blog/blog-item";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Blog(){
    return (
        <>
            <Layout>
                <Head>
                    <title>Blog - SMONGS Developer</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <BlogItem />
                    </div>
                </section> */}
                <section className="py-3">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3 -mb-8">
                            <BlogItem />
                        </div>                        
                    </div>
                </section>
            </Layout>
        </>
    )
}