import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Зачастую нам надо повторять одно и то же действие во многих частях
    программы. Например, необходимо красиво вывести всплывашку при приветствии
    посетителя, при удачном завершении какого-то действия, ещё где-нибудь. При
    этом может отличаться текст сообщения, цвет фона или иконка, но базовый
    функционал будет совпадать. В таких случаях удобно написать универсальную
    функцию и переиспользовать ее в коде! Или представим, что нам необходимо
    обработать 10 значений одинаковым образом. Вместо того, чтобы повторять 10
    раз один и тот же код, проще упаковать его в функцию и вызвать ее 10 раз!
    Функции - это основа чистого кода, обязательная к изучению. Мы уже
    использовали функции (методы) для работы со строками и числами. Сегодня
    научимся писать свои.
  </Notes>
);

export const Slide01 = ({ ...meta }) => (
  <DeckSection {...meta} SlideNotes={SlideNotes} />
);
