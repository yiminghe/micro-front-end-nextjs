'use client';

import { useEffect, useState } from 'react';

export default function Wrap({ children }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (
      location.port !== '3000' &&
      !location.host.startsWith('micro-front-end-nextjs-main')
    ) {
      setShow(false);
    }
  }, []);
  return <div style={{ display: show ? 'block' : 'none' }}>{children}</div>;
}
