import { useState, useEffect, useRef } from 'react';

/**
 * 从大到小的缩放动画Hook - 基于Intersection Observer
 * 从150%缩放到100%，先快后慢的动画效果
 * @param {number} delay - 动画开始的延迟时间（毫秒）
 * @param {number} threshold - 触发动画的可见比例 (0-1)
 * @returns {[React.RefObject, boolean]} [ref, isVisible] - 元素引用和是否可见状态
 */
export function useAnimateBigToSmall(delay = 800, threshold = 0.6) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target); // 只触发一次
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return [ref, isVisible];
}

/**
 * 获取从大到小缩放动画的类名
 * @param {boolean} isVisible - 是否可见
 * @returns {string} 动画类名
 */
export function getBigToSmallAnimationClasses(isVisible) {
  return `transition-all duration-[1800ms] ease-out ${
    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
  }`;
}