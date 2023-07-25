import BlogItem from "@/components/blog/blog-item";
import Layout from "@/components/layout";
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
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <BlogItem />
                    </div>
                </section>
            </Layout>
        </>
    )
}