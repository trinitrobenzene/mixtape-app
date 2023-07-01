import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import './globals.css';
import { Quicksand } from 'next/font/google';
import Providers from '@/src/redux/provider';
import Playbar from '@/components/Playbar';
import "../../mixtape-app/styles/index.css";
import "../../mixtape-app/styles/customize-progress-bar.css";

// const inter = Inter({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin', 'vietnamese'] });

export const metadata = {
    title: 'Mixtape',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body className={quicksand.className}>
                    <Header />
                    <div className="relative">
                        <Navbar />
                        <main className="active">
                            {children}
                            {/* <Footer /> */}
                        </main>
                    </div>
                    <Playbar />
                </body>
            </Providers>
        </html>
    );
}
