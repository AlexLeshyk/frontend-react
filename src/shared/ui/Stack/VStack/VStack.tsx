import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const {
    align = 'start', className, justify, gap, max, children,
  } = props;
  return (
    <Flex direction="column" align={align} className={className} justify={justify} gap={gap} max={max}>
      {children}
    </Flex>
  );
};
