import Footer from '@/components/Footer';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

const NoteViewer = dynamic(() => import('@/components/NoteViewer'), {
    ssr: false
})

const Write = () => {
    return (
        <div className="bg-primary">
            <Header />
            <div className="h-20">
                <NoteViewer/>
            </div>            
            <Footer />
        </div>
    )
}

export default Write;