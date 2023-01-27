import { Head, asset } from "$fresh/runtime.ts";
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export default function SharedHead(props) {

  return (
    <>

      <Head>

        {/* With CDN  */}

        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" /> */}

        {/* With Local */}

        <link href={asset("bootstrap.min.css")} rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />

      </Head>

      <Header />

      {props.children}

      <Footer />

      {/* With CDN */}

      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script> */}
     
      {/* With Local */}
      <script src={asset("bootstrap.bundle.min.js")} integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </>
  );
}

