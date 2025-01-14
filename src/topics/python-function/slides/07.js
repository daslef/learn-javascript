import {
  Text,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem,
  FlexBox
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Крайние случаи - это ...</li>
      <li>
        Например, если в условии производится обращение к базе данных, но само
        условие редко выполняется, возможно не стоит ставить его на самый верх
      </li>
      <li></li>
    </ul>
  </Notes>
);

const SlideContent = () => (
  <>
    <Text
      fontSize={34}
      fontWeight="bold"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      В идеале, имя функции - глагол, точно описывающий ее назначение. Если
      одним словом описать не получается - слова объединяются в формате{' '}
      <CodeSpan fontSize={28}>snake_case</CodeSpan>
    </Text>
    <Text
      fontSize={28}
      fontWeight="bold"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      Программисты часто повторяют, что код читается гораздо чаще, чем пишется.
      Поэтому важно заботиться о читаемости и понятности кода. Примеры хороших и
      плохих именований:
    </Text>
    <FlexBox>
      <SlideCodePane playground={false} size="sm">{`// хорошие
get_user_info
prepare_string
check_credentials
calculate_area
group_payment_transactions_by_user
is_payload_correct
`}</SlideCodePane>
      <SlideCodePane playground={false} size="sm">{`// плохие
x
parseInt
function_written_by_mark
chckdsk
filter_by_group_name_and_show_all_accounts_that_match_criteria
`}</SlideCodePane>
    </FlexBox>
  </>
);

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Именование функций"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
