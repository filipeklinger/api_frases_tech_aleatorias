import { ValidateError } from "../../errorTypes/validadeError";
import { DogRepository } from "../../repository/dog/dogRepository";

export class DogModule {
    private cRepo: DogRepository;

    constructor() {
        this.cRepo = new DogRepository();
    }

    public getFact(filter: { id: number }) {
        let f: { fact: string; id: number; };

        if (filter.id) {
            this.validateFilter(filter, this.cRepo.maxIndex());
            f = this.cRepo.getFact(filter.id);
        }
        else
            f = this.cRepo.getRandomPhrase();
        return f;
    }

    private validateFilter(filter: { id: number }, maxId: number) {
        const v = filter.id;
        if (!v || Number(v) < 0 || Number(v) > maxId) {
            throw new ValidateError(`id '${v}' invalido, deve estar entre 0 e ${maxId}`);
        }
    }
}