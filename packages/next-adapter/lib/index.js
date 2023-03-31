import { initialize, hydrate } from 'next/dist/client';
import { unmountComponentAtNode } from 'react-dom';

export default function singleSpaNext() {
  let originalNextEl = document.querySelector(`#subApp #__next`);
  let promise
  return {
    async bootstrap() {
      if (promise) {
        return promise;
      }
      promise= initialize({});
      await promise;
    },
    async mount() {
      document.body.style.display='block';
      await hydrate();
    },
    async unmount() {
      document.body.style.display='';
      const unmounted = unmountComponentAtNode(originalNextEl);
      if (!unmounted) {
        throw Error(
          `unmountComponentAtNode() returned false, indicating the application failed to unmount`,
        );
      }
    },
  };
}
