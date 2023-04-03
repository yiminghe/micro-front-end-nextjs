import Link from 'next/link';
import { useEffect } from 'react';
export default function () {
  useEffect(() => {
    console.log('app1 detail mount');
    return () => console.log('app1 detail unmount');
  }, []);
  return (
    <>
      <h2>app1 详情页</h2>
      <Link href="./">app1 首页</Link>
      <br /> <br />
      <div>
        <button onClick={() => alert('app1 详情页')}>app1 alert</button>
      </div>
    </>
  );
}
