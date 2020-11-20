import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 14, 1, 13]);
const characterCollection = new CharacterCollection("aSdEbHg");
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-5);
linkedList.add(4);
linkedList.add(2);

const sortNumber = new Sorter(numbersCollection);
const sortCharacter = new Sorter(characterCollection);
const sortLinkedList = new Sorter(linkedList);
sortNumber.sort();
sortCharacter.sort();
sortLinkedList.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
console.log(linkedList.print());
