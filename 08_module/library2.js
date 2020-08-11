export function AnimalPlay(obj)
{
    obj.makeSound();
}
export class Animal
{
    constructor(animlweight= 1)
    {
        this.weight=animlweight;
    }
    makeSound()
    {
          alert("Animal:........");
    }

}
export default class Wolf extends Animal
{
    constructor(location = "Earth",animalweight)
    {
        super(animalweight);
        this.location=location;
    }
    makeSound()
    {
        alert("RRRRRRRRRR");
    }
}