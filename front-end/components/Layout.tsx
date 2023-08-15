import Footer from "./Footer";
import Shortcut from "./Shortcut";
import SlideOvers from "./SlideOvers";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <>
            <div className="bg-primary">
                {/* <div className="max-w-6xl mx-auto min-h-screen"> */}
                <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0 min-h-screen">
                    {children}
                </div>
                <SlideOvers />
                <Shortcut />
                <Footer />
            </div>
        </>
    )
}