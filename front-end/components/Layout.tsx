import Footer from "./Footer";
import Header from "./Header";
import SlideOvers from "./SlideOvers";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <>
            <div className="bg-primary">
                <Header />
                <SlideOvers />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    )
}