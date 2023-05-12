import { component$, Slot } from '@builder.io/qwik';
import { Dialog } from '@qwik-ui/headless';
import { PreviewCodeExample } from '../../../../../components/preview-code-example/preview-code-example';

export const Example01 = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent">
        <Dialog.Root>
          <Dialog.Trigger>
            <button>Open Dialog</button>
          </Dialog.Trigger>
          <Dialog.Portal>Hello World</Dialog.Portal>
        </Dialog.Root>
      </div>

      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});
