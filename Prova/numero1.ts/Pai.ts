import { AvoManoel } from "./Avo";

export class PaiCarlos extends AvoManoel{
    private profissao: string 
    
    constructor(name: string, age: number, height: number, profissao: string) {
        super(name, age, height)
        this.profissao = profissao
        
        
    }

    getProfissao(){
        return this.profissao
    }


}