import { initialize, hydrate, reactRoot } from 'next/dist/client';

export default function singleSpaNext() {
  let promise;
  return {
    async bootstrap() {
      if (promise) {
        return promise;
      }
      promise = initialize({
        webpackHMR: { onUnrecoverableError() {} },
      });
      await promise;
    },
    async mount() {
      document.body.style.display = 'block';
      await hydrate();
    },
    async unmount() {
      document.body.style.display = '';
      reactRoot.unmount();
    },
  };
}
