import Wolf, { AnimalPlay as play,Animal} from "./library2.js";

let obj = new Wolf(undefined,3);
console.log(obj.weight,obj.location)
play(obj);