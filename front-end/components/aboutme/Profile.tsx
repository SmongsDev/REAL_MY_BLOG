import Image from "next/image";

const Profile = () => {
    return (
        <div className="flex justify-center items-center mt-10 draggable">
            <div className="rounded-lg shadow-md p-5 flex items-center profile-card">
                <Image src={"/img/footerLogo.png"} width={100} height={100} quality={100} alt="Profile" />
                <div className="m-3">
                    <hr className="flex-grow border-t border-gray-300 dark:border-gray-400"/>
                    <h1 className="flex justify-center text-2xl font-bold my-3">상태창</h1>
                    <hr className="flex-grow border-t border-gray-300 dark:border-gray-400"/>
                    <div className="text-sm pt-4 uppercase">
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                이름 : 
                                <span className="pl-2">
                                    신성민
                                </span>
                            </div>
                            <div>
                                레벨 : 
                                <span className="pl-2">
                                    21
                                </span>
                            </div>
                            <div>
                                직업 : 
                                <span className="pl-2">
                                    Developer
                                </span>
                            </div>
                            <div>
                                피로도 : 
                                <span className="pl-2">
                                    40
                                </span>
                            </div>
                            <div>
                                칭호 : 
                                <span className="pl-2">
                                    개발을 즐기는
                                </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            HP : 
                            <span className="pl-2">60</span>
                        </div>
                        <div className="mt-3">
                            MP : 
                            <span className="pl-2">10</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <hr className="flex-grow border-t border-gray-300"/>
                        <span className="px-3 text-gray-400">
                            STATUS
                        </span>
                        <hr className="flex-grow border-t border-gray-300"/>
                    </div>
                    <div className="text-sm uppercase">
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                코딩력 : 
                                <span className="pl-2">미춋</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600">경험치 : </p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="exp-card w-4/12 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    {/* <h2 className="tracking-wide">
                        Object in JavaScript
                        <br />
                        (Challenge)
                    </h2> */}
                    {/* <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button> */}
                </div>
            </div>
        </div>
    )
}

export default Profile;