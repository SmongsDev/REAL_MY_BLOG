import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import useCreatePost from '@/hooks/useCreatePost';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const NoteViewer = dynamic(() => import('@/components/NoteViewer'), {
    ssr: false
})

import { DEFAULT_URL, GITHUB_TOKEN } from "@/config";

const Write = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    console.log(title);
    console.log(content); // 들어오긴함 
    const useCreatePost = async() => {
        console.log("잘 왔나?", title)
          
        if (!GITHUB_TOKEN) {
            console.log("토큰이 없어요!");
        } else {
            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
            console.log("토큰 있음");
    
            const res = await fetch(`${DEFAULT_URL}/api/project/create`, { method: 'POST', headers: requestHeaders, body: JSON.stringify({title: title, content: content})})
            const repo = await res.json();
            console.log(repo);
        }
    };
    return (
        <>
            <div className="bg-primary">
                <Header />
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-200">글 작성</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">음을 열고 공감할 수 있는 내용과 생각을 담아, 진심을 다해 작성한 이 글이 여러분들에게 영감과 긍정적인 영향을 끼칠 수 있기를 바랍니다. 단순한 단어들이 아니라 마음을 담아 섬세하게 표현한 글을 통해 서로를 이해하고, 존중하는 마음을 길러가길 기대합니다.</p>
                            
                        </div>
                        <div className="mt-6 px-60">
                            <NoteViewer />
                            <button className='container mt-5 text-white bg-gradient-to-br from-[#140974] to-[#1938c2] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' 
                            onClick={() => {
                                setTitle(document.querySelector('#small-input')?.value)
                                setContent(document.querySelector('.ContentEditable__root')?.innerHTML)
                                useCreatePost
                            }}>Submit</button>
                        </div>
                        
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Write;