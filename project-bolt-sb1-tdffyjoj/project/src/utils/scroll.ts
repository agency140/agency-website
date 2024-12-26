export function scrollToElement(elementId: string, duration: number = 800): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = elementPosition + startPosition;
  
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smooth acceleration and deceleration
    const ease = (t: number) => t < 0.5 
      ? 4 * t * t * t 
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    window.scrollTo(0, startPosition + (distance - startPosition) * ease(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}