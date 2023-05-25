'use client';

import React, { useCallback } from 'react';

export default function Link(props) {
  //const router = useRouter();
  const onClick = useCallback((e) => {
    e.preventDefault();
    props.onClick && props.onClick(e);
    // window.removeEventListener('popstate',router.onPopState);
    history.pushState({}, null, props.href);
  }, []);

  return React.createElement('a', {
    ...props,
    onClick,
  });
}
