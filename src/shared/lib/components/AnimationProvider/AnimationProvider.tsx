import {
  createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type GestureType = typeof import('@use-gesture/react');
type SpringType = typeof import('@react-spring/web');

interface AnimationContextPaylod {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

export const AnimationContext = createContext<AnimationContextPaylod>({});

interface AnimationProviderProps {
  children: ReactNode;
}

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPaylod>;

export const AnimationProvider = (props: AnimationProviderProps) => {
  const { children } = props;
  const refGesture = useRef<GestureType>();
  const refSpring = useRef<SpringType>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getAsyncAnimationModules = async () => Promise.all([
    import('@use-gesture/react'),
    import('@react-spring/web'),
  ]);

  useEffect(() => {
    getAsyncAnimationModules().then(([Gesture, Spring]) => {
      refGesture.current = Gesture;
      refSpring.current = Spring;
      setIsLoaded(true);
    });
  }, []);

  const memoizedAnimationValue = useMemo(() => ({
    Gesture: refGesture.current,
    Spring: refSpring.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={memoizedAnimationValue}>
      {children}
    </AnimationContext.Provider>
  );
};
