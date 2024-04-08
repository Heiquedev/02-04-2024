import { PaiCarlos } from "./Pai";

export class FilhaJoana extends PaiCarlos{
    public salario: number

    constructor(name: string, age: number, height: number, profissao: string, salario: number) {
        super(name, age, height, profissao)
        this.salario = salario

    }

getSalario(){
    return `O salário de ${this.name} é ${this.salario}.`
}

}