import Footer from "./footer";
import Header from "./header";

interface IProps {
    children: any;
}

export default function Layout({ children }: IProps){
    return (
        <>
            <div className="bg-primary">
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </>
    )
}