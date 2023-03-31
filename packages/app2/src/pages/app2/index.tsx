import Link from 'next/link';
export default function () {
  return (
    <>
      <h2>app2 首页</h2>
      <Link href="./app2/detail">详情页</Link>
      <br/> <br/>
      <div>
      <Link href="/app1">go to app1</Link>
      </div>
    </>
  );
}
