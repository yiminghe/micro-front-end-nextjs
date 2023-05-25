'use client';

import { useEffect } from 'react';

export default function Log({ name }) {
  useEffect(() => {
    console.log(name + ' mount');
    return () => console.log(name + ' unmount');
  }, []);
  return null;
}
