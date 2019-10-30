import React from 'react';
import YouTubeSubscribe from './YouTubeSubscribe';

// Refer) https://developers.google.com/youtube/youtube_subscribe_button
export default function Subscribe() {
  let channelid = 'UCP8eGShXYuH5NKeQeCA4p9g';
  return (
    <div bottom="70px" className="App">
      <section className="c-share">
        <YouTubeSubscribe
          channelid={channelid}
          theme={'default'}
          layout={'full'}
          count={'default'}
        />
      </section>
    </div>
  );
}
