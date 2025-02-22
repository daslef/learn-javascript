import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

export const Slide01 = ({ ...meta }) => (
  <DeckSection
    {...meta}
    SlideNotes={() => (
      <Notes>
        В JavaScript объект является прародителем всех других сущностей. Все
        типы данных и структуры, кроме примитивных, являются потомками объекта.
        Объекты удобно использовать для хранения данных в парах "ключ-значение",
        так как вместо числовых индексов (как в массивах) тут мы можем
        использовать понятные имена
      </Notes>
    )}
  />
);
