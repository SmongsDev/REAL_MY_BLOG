import BlogItem from "@/components/blog/blog-item";
import Page from "@/components/content-layouts/Page";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import BlogContents from "@/contents/blog";
import Head from "next/head";

export default function Blog(){
    return (
        <>
            <Layout>
                <Page
                frontMatter={{
                    title: 'Blog',
                }}
                >
                    <section className="py-3">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-3 -mb-8">
                                <BlogContents />
                                <BlogItem />
                            </div>                        
                        </div>
                    </section>
                </Page>
            </Layout>
        </>
    )
}