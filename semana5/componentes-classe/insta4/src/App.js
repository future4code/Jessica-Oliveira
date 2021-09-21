import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/id/1027/2848/4272"}
          fotoPost={"https://picsum.photos/id/1015/6000/4000"}
        />
        <Post
          nomeUsuario={"sofia"}
          fotoUsuario={"https://picsum.photos/id/1011/5472/3648"}
          fotoPost={"https://picsum.photos/id/1025/4951/3301"}
        />
        <Post
          nomeUsuario={"rafa"}
          fotoUsuario={"https://picsum.photos/id/1005/5760/3840"}
          fotoPost={"https://picsum.photos/id/1022/6000/3376"}
        />
      </MainContainer>
    );
  }
}

export default App;
