import { User } from '@/entities/User';
import { ArticleType, ArticleBlockType } from '../consts/consts';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: Array<string>;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id?: string;
  title?: string;
  subtitle?: string;
  img?: string;
  views?: number;
  createdAt?: string;
  userId?: string;
  type?: Array<ArticleType>;
  blocks?: Array<ArticleBlock>;
  user?: User;
}
