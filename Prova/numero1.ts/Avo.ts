export class AvoManoel{
    protected name:string 
    protected age:number
    protected height: number

    constructor(name: string, age: number, height: number){

        this.name = name    
        this.age = age
        this.height = height

    }
  
    info(): string {
        return `Name: ${this.name} \n Idade: ${this.age} \n Altura: ${this.height} `
    }
}