import { AppNPage } from './app.po';

describe('app-n App', () => {
  let page: AppNPage;

  beforeEach(() => {
    page = new AppNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
