import { ArprojectUiPage } from './app.po';

describe('arproject-ui App', () => {
  let page: ArprojectUiPage;

  beforeEach(() => {
    page = new ArprojectUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
