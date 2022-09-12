import NavBar from "../components/NavBar";
import "../styles/globals.css";

// prop component 는 page 전환시 potato 나 home 같은 것이 넘어오게 된다.
// about.js index.js 가 rendering되기 전에 _app.js 가 호출된다.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}