import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-veryLightGray dark:bg-veryDarkBlue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
