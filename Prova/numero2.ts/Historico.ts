import { AvoManoel } from "../numero1.ts/Avo";
import { Sites } from "./Sites";
import * as proptSync from 'prompt-sync' 
const prompt = proptSync()

export class Usuario extends AvoManoel{
    historico: Sites[]

    constructor(name:string , age:number, height:number, historico: Sites[]){
        super(name, age, height)
        this.historico = historico

    }


    navegar(){
        let decisao = prompt(`Em qual site deseja navegar? `)
        this.historico.push(decisao)
    }


    removerHist(){
        this.historico.pop()
    }

    historic(){

        return this.historico
    }

}



const usu1: Usuario = new Usuario("JKL", 18, 1.97, [])
usu1.navegar()
usu1.navegar()
console.log( usu1.historic());
usu1.removerHist()
console.log( usu1.historic());
