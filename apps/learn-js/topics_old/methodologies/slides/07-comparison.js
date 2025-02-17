import {
  Slide,
  Heading,
  FlexBox,
  Text,
  Image,
  Table,
  TableBody,
  TableRow,
  TableCell
} from 'spectacle';

import arrowRight from '../assets/arrow-right.svg';

export const Slide07 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="20px"
      paddingBottom="40px"
    >
      <Heading
        fontSize={40}
        fontWeight="500"
        padding="0px"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '160px'
        }}
      >
        Agile
        <Image src={arrowRight} style={{ width: '80px' }} />
        <Image
          src={arrowRight}
          style={{ width: '80px', transform: 'rotate(180deg)' }}
        />
        Waterfall
      </Heading>
      <Table style={{ borderSpacing: '0.75em 0.5em' }}>
        <TableBody>
          <TableRow>
            <TableCell fontSize={18}>
              Процесс разработки продукта разделен на спринты. Используется
              пошаговый итеративный подход, следовательно фазы разработки могут
              неоднократно повторяться.
            </TableCell>
            <TableCell fontSize={18}>
              Процесс разработки четко разделен на последовательные этапы.
              Каждый из этапов происходит только один раз.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              Требования к проекту могут меняться и дополняться. Можно начать
              разработку ПО без четкого плана, имея лишь набор идей.
            </TableCell>
            <TableCell fontSize={18}>
              Бизнес-аналитик формирует требования к проекту на начальной
              стадии, в дальнейшем требования меняться не могут.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              Проект может рассматриваться как набор продуктов
            </TableCell>
            <TableCell fontSize={18}>
              Разработка ведется в рамках единого, цельного проекта
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              План тестирования обсуждается после каждого спринта. Тестирование
              производится параллельно с разработкой. Команда тестировщиков
              может инициировать изменение требований.
            </TableCell>
            <TableCell fontSize={18}>
              План тестирования, будучи утвержден, обсуждается редко. Команде
              тестировщиков проблематично инициировать какие-либо изменения в
              требованиях.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              Продуктовый майндсет - программный продукт должен удовлетворять
              ожиданиям конечного пользователя и быть готовым к изменениям под
              его запросы
            </TableCell>
            <TableCell fontSize={18}>
              Проектный майндсет с фокусом на завершении проекта
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              Из-за отсутствия конкретных формулировок бывает сложно оценить
              бюджет и время, требуемые на разработку 
            </TableCell>
            <TableCell fontSize={18}>
              Стоимость и сроки известны на начальном этапе
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell fontSize={18}>
              Предпочтение отдается небольшим командам с высоким уровнем
              координации и синхронизации. Нет необходимости в менеджере
              проекта, команда сама управляет продуктом
            </TableCell>
            <TableCell fontSize={18}>
              Взаимодействия внутри команды крайне ограничены. Менеджер проекта
              играет важнейшую роль на всех стадиях.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </FlexBox>
  </Slide>
);
