import Image from "next/image";

const Profile = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-lg shadow-md p-5 flex items-center profile-card">
                <Image src={"/img/footerLogo.png"} width={100} height={100} quality={100} alt="Profile" />
                <div className="ml-5">
                    <h1 className="text-xl font-bold">SMONGS</h1>
                    <div className="text-sm pt-2 grid grid-cols-2 gap-2">
                        <div>
                            레벨 : 
                            <span className="pl-2">
                                10
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
                    <div className="mt-4 mb-10">
                        <p className="text-gray-600">경험치 : </p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <h3 className="text-xs uppercase">Status</h3>
                    <h2 className="tracking-wide">
                        Object in JavaScript
                        <br />
                        (Challenge)
                    </h2>
                    {/* <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button> */}
                </div>
            </div>
        </div>
    )
}

export default Profile;