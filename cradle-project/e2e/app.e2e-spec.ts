import { CradleProjectPage } from './app.po';

describe('cradle-project App', () => {
  let page: CradleProjectPage;

  beforeEach(() => {
    page = new CradleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
