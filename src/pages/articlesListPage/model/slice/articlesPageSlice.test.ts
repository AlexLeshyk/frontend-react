import {
  ArticleModel, ArticleListView, ArticleBlockType, ArticleSortField, ArticleType,
} from '@/entities/Article';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { ArticlePageModel } from '../types/articlePageModel';
import { getArticlesList } from '../services/getArticlesList/getArticlesList';

const articles = [
  {
    id: '1',
    title: 'Javascript news ЕР',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1021,
    createdAt: '26.04.2024',
    userId: '1',
    type: [ArticleType.IT, ArticleType.ECONOMICS],
    blocks: [
      {
        id: '2',
        type: ArticleBlockType.IMAGE,
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        title: 'Рисунок 1 - скриншот сайта',
      },
      {
        id: '3',
        type: ArticleBlockType.CODE,
        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      },
    ],
    user: {
      username: 'Alex',
      id: '1',
      avatar: 'https://avatarzo.ru/wp-content/uploads/oduvanchik-na-solncze.jpg',
    },
  },
  {
    id: '2',
    title: 'Javascript news ЕР',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1019,
    createdAt: '26.05.2024',
    userId: '1',
    type: [ArticleType.IT, ArticleType.ECONOMICS, ArticleType.ALL],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
      {
        id: '4',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
    ],
    user: {
      username: 'Andrew',
      id: '2',
    },
  },
] as Array<ArticleModel>;

describe('articlesPageSlice', () => {
  test('test setView', () => {
    const state: DeepPartial<ArticlePageModel> = { view: ArticleListView.LIST };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setView(ArticleListView.TILE))).toEqual({ view: 'tile' });
  });

  test('test setPage', () => {
    const state: DeepPartial<ArticlePageModel> = { page: 1 };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setPage(2))).toEqual({ page: 2 });
  });

  test('test setSearch', () => {
    const state: DeepPartial<ArticlePageModel> = { search: '' };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setSerch('some'))).toEqual({ search: 'some' });
  });

  test('test setSort', () => {
    const state: DeepPartial<ArticlePageModel> = { sort: ArticleSortField.CREATED };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setSort(ArticleSortField.VIEWS))).toEqual({ sort: 'views' });
  });

  test('test setOrder', () => {
    const state: DeepPartial<ArticlePageModel> = { order: 'asc' };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setOrder('desc'))).toEqual({ order: 'desc' });
  });

  test('test setType', () => {
    const state: DeepPartial<ArticlePageModel> = { type: ArticleType.IT };
    expect(articlesPageReducer(state as ArticlePageModel, articlesPageActions.setType(ArticleType.SCIENCE))).toEqual({ type: 'SCIENCE' });
  });

  test('test initState', () => {
    const state: DeepPartial<ArticlePageModel> = { view: ArticleListView.LIST };
    expect(articlesPageReducer(
      state as ArticlePageModel,
      articlesPageActions.initState(),
    )).toEqual({ view: 'tile', limit: 9, inited: true });
  });

  test('test getArticlesList pending state', () => {
    const state: DeepPartial<ArticlePageModel> = {
      isLoading: false,
      error: 'error',
    };
    expect(articlesPageReducer(
      state as ArticlePageModel,
      getArticlesList.pending('', { replace: false }, {}),
    )).toEqual({ isLoading: true, error: undefined });
  });

  test('test getArticlesList fulfilled state', () => {
    const state: DeepPartial<ArticlePageModel> = {
      isLoading: true,
      view: ArticleListView.LIST,
      hasPage: false,
      limit: 5,
      ids: [],
      entities: {},
    };
    expect(articlesPageReducer(
      state as ArticlePageModel,
      getArticlesList.fulfilled(articles, '', {}),
    )).toEqual({
      hasPage: false,
      isLoading: false,
      limit: 5,
      view: 'list',
      ids: ['1', '2'],
      entities: {
        1: articles[0],
        2: articles[1],
      },
    });
  });
});
