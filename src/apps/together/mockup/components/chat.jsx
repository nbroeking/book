class ChatContent extends React.Component {
  render(){
    return (
      <div className="collection">
      <p>Nic: Has anyone here ever been to Costa Rica?</p>
      <br/>
      <br/>
      <p>Alexa: Yes what do you want to know?</p>
      <br/>
      <br/>
      <p>Nic: Where would you recomend I go?</p>
      <br/>
      <br/>
      <p>Alexa: Definatly go to the tamarindo area! Its amazing!!!</p>
      <br/>
      <br/>
      <p>Rachel: I agree. I went there once and it was absolutly beautiful.</p>
      <br/>
      <br/>
      <p>Ross: I also recomend the caribean side. It has beautiful beaches. </p>
      <br/>
      <br/>
      <p>Nic: Thank you everyone. Ill let you know how it goes.</p>
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