import React from "react";

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
