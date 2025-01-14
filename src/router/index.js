import React from 'react';

import { createBrowserRouter, useLoaderData } from 'react-router-dom';

import * as Topics from '../topics';
import * as Lessons from '../lessons';

import { DecksList } from './DecksList';

const TopicSwitch = () => {
  const topicId = useLoaderData();

  switch (topicId) {
    case 'html-lists':
      return <Topics.HTMLCSS />;
    case 'orientation-it':
      return <Topics.OrientationIT />;
    case 'data-types':
      return <Topics.DataTypes />;
    case 'number':
      return <Topics.Number />;
    case 'string':
      return <Topics.String />;
    case 'conditionals':
      return <Topics.Conditionals />;
    case 'function':
      return <Topics.Function />;
    case 'practice-1':
      return <Topics.Practice1 />;
    case 'array':
      return <Topics.Array />;
    case 'loops':
      return <Topics.Loops />;
    case 'object':
      return <Topics.Objects />;
    case 'javascript':
      return <Topics.JavaScript />;
    case 'methodologies':
      return <Topics.Methodologies />;

    case 'python-function':
      return <Topics.PythonFunction />;

    default:
      return <></>;
  }
};

const LessonSwitch = () => {
  const lessonId = useLoaderData();

  switch (lessonId) {
    case 'vzlet-02':
      return <Lessons.Vzlet02 />;
    default:
      return <DecksList />;
  }
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DecksList />
  },
  {
    path: '/lessons/:lessonId',
    element: <LessonSwitch />,
    loader: async ({ params }) => String(params.lessonId)
  },
  {
    path: '/topics/html/:topicId',
    element: <TopicSwitch />,
    loader: async ({ params }) => String(params.topicId)
  },
  {
    path: '/topics/:topicId',
    element: <TopicSwitch />,
    loader: async ({ params }) => String(params.topicId)
  }
]);
