import { MovieFinderPage } from './app.po';

describe('movie-finder App', () => {
  let page: MovieFinderPage;

  beforeEach(() => {
    page = new MovieFinderPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
