import { articleReducer } from './articleSlice';
import { ArticleDetailsModel } from '../types/articleDetailsModel';
import { getArticleById } from '../services/getArticleById/getArticleById';
import { ArticleBlock, ArticleBlockType, ArticleType } from '../types/article';

const data = {
  id: '1',
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  img: '/http',
  views: 100,
  createdAt: '10.12.2023',
  userId: '123',
  type: [ArticleType.ECONOMICS],
  user: {
    username: 'Alex',
    id: '1',
  },
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
  ] as Array<ArticleBlock>,
};

describe('articleSlice', () => {
  test('test getArticleById pending state', () => {
    const state: DeepPartial<ArticleDetailsModel> = {
      isLoading: false,
      error: 'error',
    };
    expect(articleReducer(
      state as ArticleDetailsModel,
      getArticleById.pending,
    )).toEqual({ isLoading: true, error: undefined });
  });

  test('test getArticleById fulfilled state', () => {
    const state: DeepPartial<ArticleDetailsModel> = {
      isLoading: true,
    };
    expect(articleReducer(
      state as ArticleDetailsModel,
      getArticleById.fulfilled(data, '1', ''),
    )).toEqual({
      isLoading: false, error: undefined, data,
    });
  });
});
