// model/constants.js
const baseStyle = {
  width: 560,
  height: 'auto',
  display: 'inline-table',
  bgcolor: 'rgba(255, 255, 255, 1)',
  borderRadius: '24px',
  boxShadow: '0px 16px 40px 0px rgba(23, 32, 41, 0.32)',
  p: 4,
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const scrollStyle = {
  overflowY: 'auto' as const,
  maxHeight: '100vh' as const,
  height: '100vh',
  display: 'block',
};

export const getDynamicStyle = (isScrollable: unknown) => {
  return isScrollable ? { ...baseStyle, ...scrollStyle } : baseStyle;
};
