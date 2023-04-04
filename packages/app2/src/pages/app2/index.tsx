import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function () {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location.port !== '3000') {
      setShow(false);
    }
    console.log('app2 index mount');
    return () => console.log('app2 index unmount');
  }, []);
  return (
    <>
      <h2 className="title">app2 首页</h2>
      <div>
        <Link href="./app2/detail">app2 详情页</Link>
      </div>
      <br />
      <div style={{ display: show ? 'block' : 'none' }}>
        <div>
          <Link href="/app1">go to app1</Link>
        </div>
        <br />{' '}
        <div>
          <Link href="/app1/detail">go to app1 detail</Link>
        </div>
      </div>
    </>
  );
}
