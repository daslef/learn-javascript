import { Presentation as JS_DataTypes } from "./01-data-types";

export default function renderTopic(topicId: string) {
  switch (topicId) {
    case 'data-types':
      return <JS_DataTypes />;
    default:
      return <></>;
  }
};