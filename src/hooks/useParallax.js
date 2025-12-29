import { useState, useEffect, useCallback } from 'react';

/**
 * 视差滚动 Hook
 * @param {number} speed - 视差速度，0.5 表示背景滚动速度是页面的一半
 * @returns {object} - { offset, style }
 */
function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    // 使用 requestAnimationFrame 优化性能
    requestAnimationFrame(() => {
      setOffset(window.scrollY * speed);
    });
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const style = {
    transform: `translateY(${offset}px)`,
  };

  return { offset, style };
}

export default useParallax;
