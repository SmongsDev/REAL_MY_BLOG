import { useState, useEffect } from 'react';
import Page from "@/components/content-layouts/Page";
import Data from '@/interface/projectT.interface';
import Layout from '@/components/Layout';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import { GetServerSideProps } from 'next';
import BlogContents from '@/contents/blog';
import PageHeader from '@/components/content-layouts/PageHeader';

interface DataType{
    data: {
        content: Data[]
    },
    errorCode: number
}

interface BlogsProps {
    repo: {
      data: {
        content: Data[];
      };
      errorCode: number;
    };
  }
function Blog({ repo }: BlogsProps){
    
    return (
        <>
            <Layout>
                <Page
                frontMatter={{
                    title: 'Blog',
                }}
                >
                <div className='px-5'>
                    <PageHeader 
                        info={{
                            title: 'Personal Blog',
                            description: "My Develop Blog"
                        }}
                    />
                    <div className='mt-16 mb-4 flex items-end gap-2'>
                        <h2 className='text-2xl font-bold tracking-tight md:text-4xl'>
                            All Posts 
                        </h2>
                        <span className='font-bold'>({repo.data.content.length})</span>
                    </div>
                    <BlogContents data={repo.data.content} />
                </div>
                </Page>
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
    try {
        const requestHeaders: HeadersInit = new Headers();
        if (GITHUB_TOKEN) {
            requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
            console.log("토큰 있음");
        } else {
            console.log("토큰이 없어요!");
        }
        const res = await fetch(`${DEFAULT_URL}/api/blog/projects?size=8`, {
            method: 'GET',
            headers: requestHeaders,
        });
    
        if (!res.ok) {
            return {
            props: {
                repo: {
                errorCode: res.status,
                data: { content: [] },
                },
            },
            };
        }
  
        const repo: DataType = await res.json();
        return { props: { repo } };
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다.', error);
        return {
            props: {
            repo: {
                errorCode: 500,
                data: { content: [] },
            },
            },
        };
    }
};
export default Blog;