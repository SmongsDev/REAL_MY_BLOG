import Layout from "@/components/Layout";
import Hero from "@/components/home/hero";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home (){
    return (
        <Layout>
            <Header title={"SMONGS Developer"} />
            {/* <Image src="/img/background.png" alt="" quality={100} layout="fill" objectFit="cover" objectPosition="center" /> */}
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero />
                </div>
            </section>
        </ Layout>
    )
}