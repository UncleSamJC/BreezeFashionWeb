import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 页面切换过渡组件
 * 在路由变化时添加淡入淡出动画效果
 */
function PageTransition({ children }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    // 路由变化时，先隐藏内容
    if (location.pathname !== displayLocation.pathname) {
      setIsVisible(false);

      // 等待淡出动画完成后（0.3秒），更新显示的位置
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    // 内容更新后，触发淡入动画
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [displayLocation]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0.4,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}

export default PageTransition;
