import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

const SlideNotes = () => (
  <Notes>
    В разработке много задач, в которых нужно по-разному обрабатывать данные.
    Все эти примеры описываются фразой «если ..., то ...»: если пользователь
    вошёл в систему, то показать содержание почтового ящика. В противном случае
    — форму логина. если сумма покупки больше 2000₽, то посчитать скидку 10%.
    если покупка оплачена, то показать экран успеха. В противном случае — экран
    с ошибкой. Фразой «если ...» определяется условие. Если условие выполняется,
    то мы выполняем часть, описанную фразой «то...». Если условие не
    выполняется, то нужно смотреть на фразу «В противном случае ...», когда она
    есть.
  </Notes>
);

export const Slide01 = ({ ...meta }) => (
  <DeckSection {...meta} SlideNotes={SlideNotes} />
);
