import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/home/hero";
import Header from "@/components/Header";

export default function Home (){
    return (
        <Layout>
            {/* <Head>
                <title>SMONGS Developer</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <Header title={"SMONGS Developer"} />
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero />
                </div>
            </section>
        </ Layout>
    )
}