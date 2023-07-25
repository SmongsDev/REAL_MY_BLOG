import Link from "next/link";
import Animation from "./animation";

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    HI~!
                    <br className="hidden lg:inline-block" />
                    Welcome To My BLOG!!
                </h1>
                <p className="mb-8 leading-relaxed">
                📢 자유로운 영감과 열정으로 탄생한 나만의 블로그를 소개합니다!<br/>
                안녕하세요! 저는 SMONGS&apos;s BLOG를 만든 Smongs이라고 합니다. 이 블로그는 제가 가지고 있는 다양한 관심사와 경험을 공유하고, 세상과 소통하기 위해 제작되었습니다. SMONGS는 무엇보다도 저의 창의력과 열정으로 가득 찬 공간으로, 여러분들과 함께 더 멋진 세상을 꿈꾸고자 합니다.<br />
                이 블로그에는 제가 여러 분야에서 배운 것들과 소중한 경험들을 담아냈습니다.
                </p>
                <div className="flex justify-center">
                    <Link href={"/projects"} legacyBehavior>
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>     
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
            
        </>
    );
}