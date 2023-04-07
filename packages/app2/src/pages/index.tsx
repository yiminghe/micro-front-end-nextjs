import Link from 'next/link';
import { useEffect, useState } from 'react';
import OuterLink from 'next-adapter/lib/OuterLink';

export default function () {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (
      location.port !== '3000' &&
      !location.host.startsWith('micro-front-end-nextjs-main')
    ) {
      setShow(false);
    }
    console.log('app2 index mount');
    return () => console.log('app2 index unmount');
  }, []);
  return (
    <>
      <h2 className="title">app2 首页</h2>
      <div>
        <Link href="/detail">app2 详情页</Link>
      </div>
      <br />
      <div style={{ display: show ? 'block' : 'none' }}>
        <div>
          <OuterLink href="/app1">go to app1</OuterLink>
        </div>
        <br />{' '}
        <div>
          <OuterLink href="/app1/detail">go to app1 detail</OuterLink>
        </div>
      </div>
    </>
  );
}
