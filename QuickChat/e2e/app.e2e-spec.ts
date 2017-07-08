import { QuickChatPage } from './app.po';

describe('quick-chat App', () => {
  let page: QuickChatPage;

  beforeEach(() => {
    page = new QuickChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
