import { AvoManoel } from "./Avo";
import { PaiCarlos } from "./Pai";
import { FilhaJoana } from "./Filha";


const filha: FilhaJoana = new FilhaJoana("Joana", 23, 1.67, "Caixa de mercadin", 1412.00) 
const pai: PaiCarlos = new PaiCarlos("Carlos", 47, 1.80, "Agiota")
const avo: AvoManoel = new AvoManoel("Manoel", 68, 1.79)


console.log(filha.info())
console.log(filha.getProfissao())
console.log(filha.getSalario())