import { scale } from 'react-native-size-matters';
import theme from '../global/styles/theme';

export function normalize(size: number) {
  return scale(size);
}


export function generatedColor(type: string) {
  const { colors } = theme;

  let color;

  switch (type) {
    case 'grass': color = colors.grass; break;
    case 'fire': color = colors.fire; break;
    case 'water': color = colors.water; break;
    case 'bug': color = colors.bug; break;
    case 'normal': color = colors.normal; break;
    case 'poison': color = colors.poison; break;
    case 'electric': color = colors.electric; break;
    case 'ground': color = colors.ground; break;
    case 'fairy': color = colors.fairy; break;
    case 'fighting': color = colors.fighting; break;
    case 'ice': color = colors.ice; break;
    case 'dragon': color = colors.dragon; break;
    case 'psychic': color = colors.psychic; break;
    case 'rock': color = colors.rock; break;
    case 'ghost': color = colors.ghost; break;
    case 'dark': color = colors.dark; break;
    case 'steel': color = colors.steel; break;
    case 'flying': color = colors.flying; break;
    default: color = "#fff";
  }


  return color;
}