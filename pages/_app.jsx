import React from "react";
import Link from "next/link";
import {Footer} from "../components"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}
