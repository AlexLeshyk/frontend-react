import cx from 'clsx';

interface ArticleImageBlockComponentProps {
  className?: string;
}
export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className } = props;
  return (
    <div className={cx({
      [className as string]: className,
    })}
    />
  );
};
