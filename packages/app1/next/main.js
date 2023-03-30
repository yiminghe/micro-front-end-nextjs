import nextAdapter from 'next-adapter';

const lifecycles = nextAdapter();

export const { bootstrap, mount, unmount } = lifecycles;
