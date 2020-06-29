import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

  
  const getMessages = () => {
     var tempMessages = [
    
        {
          id: 2,
          author: 'orange',
          message: 'Bonjour Safaa! j espere que vous allez bien',
          timestamp: new Date().getTime()
        },
        
        {
          id: 4,
          author: 'apple',
          message: 'Bonjour merci!',
          timestamp: new Date().getTime()
        },
   
        {
          id: 6,
          author: 'orange',
          message: 'j ai vu que tu as un livre de Markus Zusak la voleuse du livre',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: 'orange',
          message: 'que tu vends a 500 da , je suis tres interessée',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: 'apple',
          message: 'oui effectivement',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: 'orange',
          message: 'Si vous etes d accord je veux le prendre',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: 'apple',
          message: 'Oui bien sur ! avec plaisir ',
          timestamp: new Date().getTime()
        },
        {
          id: 11,
          author: 'apple',
          message: 'Je peux te donner mon adresse si vous etes proches sinon je peux aussi vous l envoyer par la poste ',
          timestamp: new Date().getTime()
        },
        {
          id: 12,
          author: 'orange',
          message: 'oui bien sur en fait je suis de Alger  ',
          timestamp: new Date().getTime()
        },
        
        
      ]
      setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}


          style={{backGroundColor:'black'}}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list" >
               <button style={{marginRight:'10px', marginLeft:'750px'}}> Accepter la demande</button>
               <button style={{}}> Refuser</button>



        <Toolbar
          title="Conversation"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
          
        />
        

        <div className="message-list-container" >{renderMessages()}</div>

        <Compose rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}/>
      </div>
    );
}