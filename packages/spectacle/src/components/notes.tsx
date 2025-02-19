import ReactDOM from 'react-dom';
import { DeckContext } from './deck/deck';
import { SlideContext } from './slide/slide';
import { PropsWithChildren, ReactElement, useContext } from 'react';

const Notes = ({ children }: PropsWithChildren<{}>): ReactElement | null => {
  const { notePortalNode } = useContext(DeckContext);
  const { isSlideActive } = useContext(SlideContext);

  if (!isSlideActive) return null;
  if (!notePortalNode) return null;

  return ReactDOM.createPortal(<div>{children}</div>, notePortalNode);
};

export default Notes;
