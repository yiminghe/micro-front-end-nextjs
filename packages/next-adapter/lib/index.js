import { reactRoot } from 'next/dist/client/app-index';

export default function singleSpaNext() {
  let promise;
  return {
    async bootstrap() {},
    async mount() {
      document.body.style.display = 'block';
    },
    async unmount() {
      document.body.style.display = '';
      reactRoot.unmount();
    },
  };
}
