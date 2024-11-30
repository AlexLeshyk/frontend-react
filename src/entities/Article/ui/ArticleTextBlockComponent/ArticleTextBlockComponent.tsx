import cx from 'clsx';

interface ArticleTextBlockComponentProps {
  className?: string;
}
export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { className } = props;
  return (
    <div className={cx({
      [className as string]: className,
    })}
    />
  );
};
