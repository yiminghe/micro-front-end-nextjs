import Link from 'next/link';
import { useEffect, useState } from 'react';
import OuterLink from 'next-adapter/lib/OuterLink';

export default function () {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (
      location.port !== '3000' &&
      location.host !== 'micro-front-end-nextjs-app1.vercel.app1'
    ) {
      setShow(false);
    }
    console.log('app1 index mount');
    return () => console.log('app1 index unmount');
  }, []);
  return (
    <>
      <h2 className="title">app1 首页</h2>
      <div>
        <Link href="/detail">app1 详情页</Link>
      </div>
      <br />
      <div style={{ display: show ? 'block' : 'none' }}>
        <div>
          <OuterLink href="/app2">go to app2</OuterLink>
        </div>
        <br />
        <div>
          <OuterLink href="/app2/detail">go to app2 detail</OuterLink>
        </div>
      </div>
    </>
  );
}
