import { DataePage } from './app.po';

describe('datae App', () => {
  let page: DataePage;

  beforeEach(() => {
    page = new DataePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
