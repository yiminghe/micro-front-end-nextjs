import Link from 'next/link';
import OuterLink from 'next-adapter/lib/OuterLink';
import Wrap from './Wrap';
import Log from './Log';

export default function Index() {
  return (
    <>
      <h2 className="title">app2 首页</h2>
      <div>
        <Link href="/detail">app2 详情页</Link>
      </div>
      <br />
      <Log name="app2 index" />
      <Wrap>
        <div>
          <OuterLink href="/app1">go to app1</OuterLink>
        </div>
        <br />{' '}
        <div>
          <OuterLink href="/app1/detail">go to app1 detail</OuterLink>
        </div>
      </Wrap>
    </>
  );
}
