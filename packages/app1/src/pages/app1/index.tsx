import Link from 'next/link';
export default function () {
  return (
    <>
      <h2>app1 首页</h2>
      <Link href="./app1/detail">app1 详情页</Link>
      <br/> <br/>
      <div>
      <Link href="/app2">go to app2</Link>
      </div>
    </>
  );
}