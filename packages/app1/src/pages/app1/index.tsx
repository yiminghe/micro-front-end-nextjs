import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function () {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location.port !== '3000') {
      setShow(false);
    }
    console.log('app1 index mount');
    return () => console.log('app1 index unmount');
  }, []);
  return (
    <>
      <h2 className="title">app1 首页</h2>
      <div>
        <Link href="./app1/detail">app1 详情页</Link>
      </div>
      <br />
      <div style={{ display: show ? 'block' : 'none' }}>
        <div>
          <Link href="/app2">go to app2</Link>
        </div>
        <br />
        <div>
          <Link href="/app2/detail">go to app2 detail</Link>
        </div>
      </div>
    </>
  );
}
