import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function Chatting() {
  const handleEnd = () => {
    window.location.assign('/input');
  };

  return (
    <ChatBot
      handleEnd={handleEnd}
      floating={true}
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: 'name'
        },
        {
          id: 'name',
          user: true,
          trigger: '3'
        },
        {
          id: '3',
          message: 'Hi {previousValue}! What is your gender?',
          trigger: 'gender'
        },
        {
          id: 'gender',
          options: [
            { value: 'male', label: 'Male', trigger: '5' },
            { value: 'female', label: 'Female', trigger: '5' }
          ]
        },
        {
          id: '5',
          message: 'How old are you?',
          trigger: 'age'
        },
        {
          id: 'age',
          user: true,
          trigger: '7',
          validator: value => {
            if (isNaN(value)) {
              return 'value must be a number';
            } else if (value < 0) {
              return 'value must be positive';
            } else if (value > 120) {
              return `${value}? Come on!`;
            }

            return true;
          }
        },
        {
          id: '7',
          message: 'Great!',
          trigger: 'update'
        },

        {
          id: 'update',
          message: 'Would you like to join us?',
          trigger: 'update-question'
        },
        {
          id: 'update-question',
          options: [
            { value: 'yes', label: 'Yes', trigger: 'yes-clicked' },
            { value: 'no', label: 'No', trigger: 'end-message' }
          ]
        },
        {
          id: 'end-message',
          message: 'Thanks! Your data was submitted successfully!',
          end: true
        },
        {
          id: 'yes-clicked',
          message: 'Great!',
          end: true
        }
      ]}
    />
  );
}
