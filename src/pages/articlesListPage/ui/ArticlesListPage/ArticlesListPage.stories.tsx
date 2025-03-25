import { StoryObj, Meta } from '@storybook/react';
import avatar from 'shared/images/tests/oduvanchik-na-solncze.jpg';
import { ArticleBlockType, ArticleListView, ArticleType } from '@/entities/Article';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import ArticlesListPage from './ArticlesListPage';

export default {
  title: 'pages/ArticleList/Page',
  component: ArticlesListPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesListPage>;

type Story = StoryObj<typeof ArticlesListPage>;

export const Light: Story = {};
Light.args = {};

Light.decorators = [StoreDecorator({
  articlesPage: {
    page: 1,
    limit: 4,
    hasPage: false,
    view: ArticleListView.LIST,
    isLoading: false,
    ids: ['1', '2'],
    entities: {
      1: {
        user: {
          username: 'Alex',
          id: '1',
          avatar,
        },
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
      },
      2: {
        user: {
          username: 'Dan',
          id: '2',
          avatar,
        },
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
      },
    },
  },
})];

export const Dark: Story = {};
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articlesPage: {
    isLoading: false,
    hasPage: false,
    page: 1,
    ids: ['1', '2'],
    entities: {
      1: {
        user: {
          username: 'Alex',
          id: '1',
          avatar,
        },
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
      },
      2: {
        user: {
          username: 'Dan',
          id: '2',
          avatar,
        },
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
      },
    },
  },
})];
