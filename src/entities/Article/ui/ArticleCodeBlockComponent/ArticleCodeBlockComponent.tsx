import cx from 'clsx';

interface ArticleCodeBlockComponentProps {
  className?: string;
}
export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className } = props;
  return (
    <div className={cx({
      [className as string]: className,
    })}
    />
  );
};
