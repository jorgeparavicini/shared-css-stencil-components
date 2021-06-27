import { newE2EPage } from '@stencil/core/testing';

describe('bootstrap-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bootstrap-test></bootstrap-test>');

    const element = await page.find('bootstrap-test');
    expect(element).toHaveClass('hydrated');
  });
});
