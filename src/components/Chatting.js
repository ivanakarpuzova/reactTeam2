import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function Chatting() {
  const handleEnd = values => {
    window.location.assign('/prijavi');
  };

  return (
    <ChatBot
      handleEnd={handleEnd}
      floating={true}
      steps={[
        {
          id: '1',
          message:
            'Здраво. Ние сме еколошки активисти. Тука сме да те информираме околу еколошките акции кои се случуваат.',
          trigger: 'ask'
        },
        {
          id: 'ask',
          message: 'Како се викаш?',
          trigger: 'name'
        },
        {
          id: 'name',
          user: true,
          trigger: '3'
        },
        {
          id: '3',
          message: '{previousValue} избери го твојот пол',
          trigger: 'gender'
        },
        {
          id: 'gender',
          options: [
            { value: 'male', label: 'Машко', trigger: '5' },
            { value: 'female', label: 'Женско', trigger: '5' }
          ]
        },
        {
          id: '5',
          message: 'Колку години имаш?',
          trigger: 'age'
        },
        {
          id: 'age',
          user: true,
          trigger: '7',
          validator: value => {
            if (isNaN(value)) {
              return 'Треба да биде внесен број';
            } else if (value < 0) {
              return 'Треба да е внесен позитивен број';
            } else if (value > 120) {
              return `${value}? Come on!`;
            }

            return true;
          }
        },
        {
          id: '7',
          message: 'Супер!',
          trigger: 'update'
        },

        {
          id: 'update',
          message: 'Дали би сакал/а да ни се придружиш во еко-акциите?',
          trigger: 'update-question'
        },
        {
          id: 'update-question',
          options: [
            { value: 'yes', label: 'Да', trigger: 'yes-clicked' },
            { value: 'no', label: 'Не', trigger: 'end-message' }
          ]
        },
        {
          id: 'end-message',
          message: 'Ти благодариме!',
          end: false
        },
        {
          id: 'yes-clicked',
          message: 'Супер!',
          end: true
        }
      ]}
    />
  );
}
