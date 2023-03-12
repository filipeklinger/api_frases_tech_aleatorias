import { randomIndex } from '../../utils/randomUtils';
import * as facts from './facts.json';

export class DogRepository {
  public maxIndex() {
    return facts.length - 1;
  }
  public getRandomPhrase() {
    const index = randomIndex(facts)
    const f = facts[index];
    return { fact: f, id: index }
  }

  public getFact(index: number) {
    const f = facts[index];
    return { fact: f, id: index };
  }
}