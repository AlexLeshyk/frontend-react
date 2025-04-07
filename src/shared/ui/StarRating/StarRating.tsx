import { memo, useState } from 'react';
import cx from 'clsx';
import classes from './StarRating.module.css';
import StarIcon from '@/shared/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className, size = 24, selectedStars = 0, onSelect,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={cx({
      [classes.wrapper]: true,
      [className as string]: className,
    })}
    >
      {stars.map((starNumber) => (
        <StarIcon
          className={cx({
            [classes.starIcon]: true,
            [classes.selected]: isSelected,
            [classes.hovered]: currentStarsCount >= starNumber,
          })}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />

      ))}
    </div>
  );
});
