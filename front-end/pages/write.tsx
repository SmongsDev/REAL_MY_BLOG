import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { GITHUB_TOKEN } from "@/config";
import Footer from '@/components/Footer';
import { SetStateAction, useState } from 'react';

import DOMPurify from 'dompurify';
import { TagInput } from '@/components/TagInput';

import 'react-quill/dist/quill.snow.css';
import { signIn, useSession } from 'next-auth/react';
import Error401 from './401';
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
})

const DEFAULT_URL = "https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-8080.app.github.dev"

const modules = {
    toolbar: {
        container: [
        //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'script': 'sub'}, { 'script': 'super' }], 
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image'],
          ['clean']
        ],
    }
}

export async function createPost(title: string, content: string, tags: string[], category: string) {
    const requestHeaders: HeadersInit = new Headers();
    if (!GITHUB_TOKEN) {
        console.log("토큰이 없어요!");
    }
    else{
        requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
        console.log("토큰 있음 : ", GITHUB_TOKEN);
    }
    requestHeaders.append('Content-Type', 'application/json')
    requestHeaders.append('Access-Control-Allow-Origin', '*')
    requestHeaders.append('Access-Control-Allow-Credentials', 'true')
    requestHeaders.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, locale')
    requestHeaders.append('Access-Control-Allow-Methods', '*')
    
    const body = JSON.stringify({ title, content, tags, category })
    console.log(body);

    try {
        const res = await fetch(`${DEFAULT_URL}/api/project/create`, {
            method: 'POST',
            headers: requestHeaders,
            body: body
        });

        if (!res.ok) {
            console.error('데이터를 보내는데 문제가 발생했습니다.');
            return;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다.', error);
    }
}

function Write() {
    const { data: session, status } = useSession();

    const [title, setTitle] = useState('');    
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [category, setCategory] = useState('');

    if(!session){
        return (
            <Error401 />
        )
    }

    const handleAddTag = (newTag:string) => {
        setTags([...tags, newTag]);
    };

    const handleRemoveTag = (tags: string[]) => {
        setTags(tags);
    }

    const onChangeTitle = (event: { target: { value: SetStateAction<string>}}) => {
        setTitle(event.target.value)
    }
    
    const onChangeContents = (value: string) => {
        setContent(value);
    }

    const onChangeCategory = (event: { target: { value: SetStateAction<string>}}) => {
        setCategory(event.target.value)
    }

    const handleSubmit = async () => { 
        if(status === "authenticated"){
            try {   
                const data = await createPost(title, content, tags, category);
                console.log(data);
                if (data != null){
                    window.location.reload();
                }
            } catch (error) {
                console.log("오류", error)
            }
        }
        else {
            return (
                <Error401 />
            )
        }
    };

    return (
        <>
            <div className="bg-primary">
                <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0 min-h-screen'>
                    <Header title={'Write'} />
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-200">글 작성</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">음을 열고 공감할 수 있는 내용과 생각을 담아, 진심을 다해 작성한 이 글이 여러분들에게 영감과 긍정적인 영향을 끼칠 수 있기를 바랍니다. 단순한 단어들이 아니라 마음을 담아 섬세하게 표현한 글을 통해 서로를 이해하고, 존중하는 마음을 길러가길 기대합니다.</p>
                                
                            </div>
                            <div className="mt-6 px-14">
                                <div className="mt-6 mb-4">
                                    <label htmlFor="small-input" className="block mb-2 text-xm font-medium text-gray-900 dark:text-slate-200">Title</label>
                                    <input type="text" id="small-input" value={title} onChange={onChangeTitle} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                    <label htmlFor="small-input" className="block mb-2 text-xm font-medium text-gray-900 dark:text-slate-200">Category</label>
                                    <select id="countries" defaultValue={'DEFAULT'} className="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChangeCategory}>
                                        <option value="DEFAULT" disabled>Choose a category ...</option>
                                        <option value="blog">BLOG</option>
                                        <option value="TIL">Today I Learn</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="small-input" className="block mb-2 text-xm font-medium text-gray-900 dark:text-slate-200">TAGS</label>
                                    <TagInput onAddTag={handleAddTag} tags={tags} onRemoveTag={handleRemoveTag}/>
                                </div>
                                <div className=''>
                                    <label htmlFor="small-input" className="block mb-2 mt-5 text-xm font-medium text-gray-900 dark:text-slate-200">Content</label>
                                    <ReactQuill theme="snow" value={content} onChange={onChangeContents} modules={modules} />

                                    {/* 적용 안됨 */}
                                    {/* {typeof window !== 'undefined' ? (
                                        <div dangerouslySetInnerHTML={{ __html :  DOMPurify.sanitize(value)  }} />
                                        )
                                        :(
                                         <div />   
                                        )
                                    } */}
                                    
                                </div>
                                <button className='container mt-5 text-white bg-gradient-to-br from-[#140974] to-[#1938c2] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' 
                                    onClick={handleSubmit}
                                >Submit</button>
                            </div>
                            
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}
 
export default Write;