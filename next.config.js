const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const API_KEY = "10923b261ba94d897ac6b81148314a3f"; // 임시로 이것을 사용함

console.log(process.env.USER)  // 아래 3 command는 모두 읽을 수 있었다.
console.log(process.env.HOME)
console.log(process.env.LANG)
console.log(process.env.NEXT_PUBLIC_API_KEY) // 읽을 수가 있었다
console.log(API_KEY) // 읽을 수가 있었다


module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};