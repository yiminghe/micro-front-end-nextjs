import Link from 'next/link';
export default function () {
  return (
    <>
      <h2>app1 详情页</h2>
      <Link href="./">app1 首页</Link>
      <br/> <br/>
      <div>
      <button onClick={()=>alert('app1 详情页')}>app1 alert</button>
      </div>
    </>
  );
}
