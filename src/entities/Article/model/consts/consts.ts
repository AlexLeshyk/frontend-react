export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export enum ArticleListView {
  LIST = 'list',
  TILE = 'tile',
  LINE = 'line',
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ValidateArticleError {
  EMPTY_TITLE = 'empty_title',
  EMPTY_SUBTITLE = 'empty_subtitle',
  TITLE_LENGTH = 'title_length',
  SUBTITLE_LENGTH = 'subtitle_length',
  NO_DATA = 'no_data',
  SERVER_ERROR = 'server_error',
  IMAGE_SRC = 'image_src',
  TYPE = 'type'
}
