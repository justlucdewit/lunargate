import { tokens } from './constants/tokens';
import Jimp from 'jimp';

async function lexer(path: string){
    console.log(`compiling: ${path}`);
    let test = await Jimp.read(path);
    console.log(test.inspect());
}

lexer("../demos/rippleadder.png");