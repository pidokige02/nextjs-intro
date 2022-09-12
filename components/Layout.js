import NavBar from "./NavBar";

// children 은 react.js 가 제공하는 prop이다.
// 하나의 component 를 다른 component안에 넣을때 사용한다.
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}