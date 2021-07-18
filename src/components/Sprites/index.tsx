import React from 'react';
import { Sprit } from "./styles";
import { Container } from "./styles";

export function Sprites(sprites: any) {


  return (
    <Container>
      {sprites.item.front_default && <Sprit source={{ uri: sprites.item.front_default }} />}
      {sprites.item.back_default && <Sprit source={{ uri: sprites.item.back_default }} />}
      {sprites.item.front_shiny && <Sprit source={{ uri: sprites.item.front_shiny }} />}
      {sprites.item.back_shiny && <Sprit source={{ uri: sprites.item.back_shiny }} />}
    </Container>
  )
}