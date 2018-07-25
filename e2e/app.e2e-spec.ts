import { PunchmonPage } from './app.po';

describe('punchmon App', () => {
  let page: PunchmonPage;

  beforeEach(() => {
    page = new PunchmonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
