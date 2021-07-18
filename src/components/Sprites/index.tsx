import React from 'react';
import { ImageSprite } from "../../screens/Details/styles";
import { Container } from "./styles";

export function Sprites(sprites: any) {



  return (
    <Container>
      {sprites.item.front_default && <ImageSprite source={{ uri: sprites.item.front_default }} />}
      {sprites.item.front_female && <ImageSprite source={{ uri: sprites.item.front_female }} />}
      {sprites.item.back_default && <ImageSprite source={{ uri: sprites.item.back_default }} />}
      {sprites.item.back_female && <ImageSprite source={{ uri: sprites.item.back_female }} />}
      {sprites.item.front_shiny && <ImageSprite source={{ uri: sprites.item.front_shiny }} />}
      {sprites.item.front_shiny_female && <ImageSprite source={{ uri: sprites.item.front_shiny_female }} />}
      {sprites.item.back_shiny && <ImageSprite source={{ uri: sprites.item.back_shiny }} />}
      {sprites.item.back_shiny_female && <ImageSprite source={{ uri: sprites.item.back_shiny_female }} />}
    </Container>
  )
}