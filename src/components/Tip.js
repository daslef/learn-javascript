import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';

export const Tip = ({ content, placement = 'bottom', children }) => {
  return (
    <Tippy placement={placement} theme="translucent" content={content}>
      <span
        style={{
          paddingBottom: 4,
          cursor: 'pointer',
          borderBottom: '3px dashed #fc6986'
        }}
      >
        {children}
      </span>
    </Tippy>
  );
};
