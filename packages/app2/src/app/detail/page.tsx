import Link from 'next/link';
import Log from '../Log';

export default function () {
  return (
    <>
      <h2 className="title">app2 详情页</h2>
      <Link href="/">app2 首页</Link>
      <br /> <br />
      <Log name="app2 detail" />
      <div>app2 detail</div>
    </>
  );
}
