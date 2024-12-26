const ANIMATION_CLASSES = {
  fadeIn: 'animate-fade-in',
  slideInRight: 'animate-slide-in-right',
  slideInLeft: 'animate-slide-in-left',
  scaleIn: 'animate-scale-in',
} as const;

type AnimationType = keyof typeof ANIMATION_CLASSES;

export const getAnimationClass = (
  type: AnimationType,
  isVisible: boolean,
  delay?: number
): string => {
  if (!isVisible) return 'opacity-0';
  
  const baseClass = ANIMATION_CLASSES[type];
  return delay ? `${baseClass} animate-delay-${delay}` : baseClass;
};