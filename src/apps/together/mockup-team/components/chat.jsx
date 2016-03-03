class ChatContent extends React.Component {
  render(){
    return (
      <div className="collection waxz" id="chatbox">
      
      <MyComponents.TextBubble text={"Nic: Has anyone here ever been to Costa Rica?"} />
      <br/>
      <br/>
      
      <MyComponents.TextBubble text={"Alexa: Yes what do you want to know?"} />
      <br/>
      <br/>
      
      <MyComponents.TextBubble text={"Nic: Where would you recomend I go?"} />

      <br/>
      <br/>
      
      <MyComponents.TextBubble text={"Alexa: Definatly go to the tamarindo area! Its amazing!!!"} />
      
      <br/>
      <br/>
      
      <MyComponents.TextBubble text={"Rachel: I agree. I went there once and it was absolutly beautiful."} />
      <br/>
      <br/>
      
      <MyComponents.TextBubble text={"Ross: I also recomend the caribean side. It has beautiful beaches."} />
      
      <br/>
      <br/>
      <MyComponents.TextBubble text={"Nic: Thank you everyone. Ill let you know how it goes."} />
      
      <br/>
      <br/>
      <MyComponents.TextBubble text={"Nic: I just go back from my trip and it was amazing! Thank you everyone that helped."} />
      
      <br/>
      <br/>
      <MyComponents.TextBubble text={"Alexa: No worries Im glad I could help!"} />

      
      <br/>
      <br/>
      <MyComponents.TextBubble text={"Ross: What did you end up doing?"} />

      
      <br/>
      <br/>
      <MyComponents.TextBubble text={"Nic: The best was just hanging out on the beach!"} />
      <br/>
      <br/>
      <p>Ross is typing: oh that sounds fun!</p>
      </div>

    );
  }
}

MyComponents.ChatContent = ChatContent

class Chat extends React.Component {
  render(){
    return (
      <div className="col s9 full" >
        <MyComponents.Card title={"Travel"} content={<MyComponents.ChatContent />}/>
      </div>
      );
  }
}

MyComponents.Chat = Chat