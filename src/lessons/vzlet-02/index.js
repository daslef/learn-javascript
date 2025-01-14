import { Deck } from 'spectacle';
import { theme, template, DeckFirstSlide } from '../../components';

import { Methodologies } from '../../topics/methodologies';

const meta = {
  heading: '§ JavaScript',
  heading_en: ''
};

/* после 7 слайда методологий - слайд "что выберем для нашего проекта?"*/

/* после 14 слайда методологий - слайд "ПОДВОДЯ ИТОГИ
 ** Мы познакомились с подходами, которые помогут нам успешно завершить проект,
 ** реализовать как можно больше хотелок, первоначально позаботившись о core-функционале
 **
 ** Теперь - приложим новое знание на практике!"
 */

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <DeckFirstSlide
      title="Занятие 2"
      theory={['Проектная работа по Scrum']}
      practice={['Спринт "Стартовый экран"']}
    />
    <Methodologies.Slide01 />
    {/* <JavaScript.Slide02 {...meta} />
    <JavaScript.Slide03 {...meta} />
    <JavaScript.Slide04 {...meta} />
    <JavaScript.Slide05 {...meta} />
    <JavaScript.Slide06 {...meta} />
    <JavaScript.Slide07 {...meta} /> */}
  </Deck>
);
