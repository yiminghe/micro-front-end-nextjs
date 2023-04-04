import Link from 'next/link';
import { useEffect } from 'react';
export default function () {
  useEffect(() => {
    console.log('app2 detail mount');
    return () => console.log('app2 detail unmount');
  }, []);
  return (
    <>
      <h2 className="title">app2 详情页</h2>
      <Link href="./">app2 首页</Link>
      <br /> <br />
      <div>
        <button onClick={() => alert('app2 详情页')}>app2 alert</button>
      </div>
    </>
  );
}
