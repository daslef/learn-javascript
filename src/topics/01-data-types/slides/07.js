import {
  FlexBox,
  UnorderedList,
  Text,
  Notes,
  ListItem,
  Appear
} from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    ...
    <ol>
      <li></li>
      <li></li>
    </ol>
    ...
  </Notes>
);

const SlideContent = () => (
  <>
    <FlexBox flexWrap="wrap" alignItems="start" pl={40} mb={-15}>
      {[
        'Object',
        'Function',
        'Array',
        'JSON',
        'Date',
        'ArrayBuffer',
        'Set',
        'Map',
        'Promise',
        'Intl',
        'Math',
        'RegExp',
        'Error',
        'Proxy',
        '•••'
      ].map((text, ix) => (
        <FlexBox
          height={50}
          mr={40}
          mb={15}
          backgroundColor="rgba(0,0,0,0.2)"
          key={`el${ix}`}
        >
          <Text fontSize={22} fontWeight="bold" textAlign="center">
            {text}
          </Text>
        </FlexBox>
      ))}
    </FlexBox>

    <UnorderedList>
      {[
        'содержат набор свойств, который может динамически меняться',
        'копируются по ссылке, что усложняет сборку мусора',
        'размещаются в куче',
        'размер объектов может меняться...',
        '...поэтому движок не знает, сколько памяти может понадобиться...',
        '... и выделяет память с некоторым запасом'
      ].map((text, ix) => (
        <Appear key={`ul${ix}`}>
          <ListItem fontSize={32}>{text}</ListItem>
        </Appear>
      ))}
    </UnorderedList>
  </>
);

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Объекты"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
