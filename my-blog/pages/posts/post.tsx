import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function post() {
  let id = 1;
  return (
    <>
    <Head>
      <title>Post {id}</title>
    </Head>

    <main>
    <Script 
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={()=>{
        console.log('facebook script loaded');
      }}
      />

    <div>post</div>
    <Link href="/">Back to Ikhan</Link>
    </main>
    </>
  )
}
