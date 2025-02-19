import { useState } from 'react';
import { CodePane } from '@repo/spectacle';
import Playground from 'javascript-playgrounds';

import AcademicSvg from '../assets/svg/academic.svg?react';
import InteractiveSvg from '../assets/svg/code-bracket.svg?react';

import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const AcademicIcon = ({ setInteractive }) => (
  <AcademicSvg
    onClick={() => setInteractive(false)}
    style={{
      position: 'absolute',
      right: '30px',
      top: '30px',
      width: '40px',
      cursor: 'pointer',
      backgroundColor: 'black',
      padding: '10px',
      borderRadius: '30%'
    }}
  />
);

const InteractiveIcon = ({ setInteractive }) => (
  <InteractiveSvg
    onClick={() => setInteractive(true)}
    style={{
      position: 'absolute',
      right: '0px',
      top: '0px',
      width: '40px',
      cursor: 'pointer',
      backgroundColor: 'black',
      padding: '10px',
      borderRadius: '30%'
    }}
  />
);

const Modal = ({ children }) => (
  <>
    <div className="modal">{children}</div>
    <div className="modal__overlay"></div>
  </>
);

export const SlideCodePane = ({
  children,
  size = 'md',
  playground = true,
  ...props
}) => {
  const [interactive, setInteractive] = useState(false);

  const Icon = () =>
    interactive ? (
      <AcademicIcon setInteractive={setInteractive} />
    ) : playground ? (
      <InteractiveIcon setInteractive={setInteractive} />
    ) : null;

  const Content = () =>
    interactive ? (
      <Modal className="playground">
        <Icon />
        <Playground
          style={{ width: '1000px', height: '600px', fontSize: 40 }}
          code={children}
        // panes={['editor', 'console']}
        // playground={{ enabled: true }}
        />
      </Modal>
    ) : (
      <CodePane
        theme={tomorrow}
        language="javascript"
        style={{ padding: '8px 16px 0 16px', margin: '8px 0 0 16px' }}
        className={size}
        {...props}
      >
        {children}
      </CodePane>
    );

  return (
    <div style={{ position: 'relative' }}>
      <Icon />
      <Content />
    </div>
  );
};
