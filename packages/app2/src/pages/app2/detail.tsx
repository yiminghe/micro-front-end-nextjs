import Link from 'next/link';
export default function () {
  return (
    <>
      <h2>app2 详情页</h2>
      <Link href="./">app2 首页</Link>
      <br/> <br/>
      <div>
      <button onClick={()=>alert('app2 详情页')}>app2 alert</button>
      </div>
    </>
  );
}
