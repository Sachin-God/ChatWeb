import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, APP_SECRET } from './Constants';
import toast from 'react-hot-toast';

function randomID(length) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export default function Room() {
  const { id } = useParams();
  const roomID = id || randomID(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      // generate Kit Token
      const appID = APP_ID;
      const serverSecret = APP_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5),
        randomID(5)
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
              window.location.protocol +
              '//' +
              window.location.host +
              window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          showScreenSharingButton:true
        },
        onJoinRoom: () => {
          toast.success(`Welcome ${id}`)
        },
        showPreJoinView: true,

      });
      
    };

    myMeeting();
  }, [roomID]);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
