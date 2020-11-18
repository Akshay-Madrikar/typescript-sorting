import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10,14,1,13]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);