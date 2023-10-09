import Layout from "@/components/Layout";
import Profile from "@/components/aboutme/Profile";
import Page from "@/components/content-layouts/Page";
import PageHeader from "@/components/content-layouts/PageHeader";
import Image from "next/image";

export default function AboutMe(){

    return (
        <>
            <Layout>
                <Page frontMatter={{
                    title: "AboutMe",
                    description: "나를 소개합니다."
                }}
                >
                <PageHeader
                    info={{
                        title: 'About Me',
                        description: "SMONGS's Infomation"
                    }}
                />
                    <Profile />
                </Page>
            </Layout>
        </>
    )
}