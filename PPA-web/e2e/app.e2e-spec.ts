import { PPAWebPage } from './app.po';

describe('ppa-web App', function() {
  let page: PPAWebPage;

  beforeEach(() => {
    page = new PPAWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
