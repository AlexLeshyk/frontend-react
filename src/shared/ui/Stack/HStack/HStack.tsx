import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const {
    align, className, justify, gap, max, children,
  } = props;
  return (
    <Flex direction="row" align={align} className={className} justify={justify} gap={gap} max={max}>
      {children}
    </Flex>
  );
};
