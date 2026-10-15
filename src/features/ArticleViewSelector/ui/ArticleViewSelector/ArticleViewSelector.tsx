import cx from 'clsx';
import { memo } from 'react';
import ListIcon from '@/shared/icons/list.svg';
import TileIcon from '@/shared/icons/tile.svg';
import { ButtonTheme } from '@/shared/ui/Button/Button.model';
import { ArticleListView } from '@/entities/Article';
import { Button } from '@/shared/ui';
import classes from './ArticleViewSelector.module.css';

export interface ArticleViewSelectorProps {
  view: ArticleListView;
  onViewClick?: (view: ArticleListView) => void;
}

const viewTypes = [
  {
    view: ArticleListView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleListView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { view, onViewClick } = props;

  const onClick = (newView: ArticleListView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={cx({ [classes.view]: true })}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          className={cx({ [classes.active]: viewType.view === view })}
        >
          {viewType.icon === TileIcon
            ? <TileIcon />
            : <ListIcon />}
        </Button>
      ))}
    </div>

  );
});
