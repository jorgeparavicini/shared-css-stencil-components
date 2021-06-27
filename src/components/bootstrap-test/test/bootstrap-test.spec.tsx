import { newSpecPage } from '@stencil/core/testing';
import { BootstrapTest } from '../bootstrap-test';

describe('bootstrap-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BootstrapTest],
      html: `<bootstrap-test></bootstrap-test>`,
    });
    expect(page.root).toEqualHtml(`
      <bootstrap-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bootstrap-test>
    `);
  });
});
