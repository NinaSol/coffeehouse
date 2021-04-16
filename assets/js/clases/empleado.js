export class Empleado{
    constructor(nombre,dni,añosTrabajando,apercibimientos,salario){
        this.nombre=nombre;
        this.dni=dni;
        this.añosTrabajando=añosTrabajando;
        this.apercibimientos=apercibimientos;
        this.salario=salario;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getDni(){
        return this.dni;
    }
    set setDni(dni){
        this.dni=dni;
    }
    get getAñosTrabajando(){
        return this.añosTrabajando;
    }
    set setAñosTrabajando(añosTrabajando){
        this.añosTrabajando=añosTrabajando;
    }
    get getApercibimientos(){
        return this.apercibimientos;
    }
    set setApercibimientos(apercibimientos){
        this.apercibimientos=apercibimientos;
    }
    get getSalario(){
        return this.salario;
    }
    set setSalario(salario){
        this.salario=salario;
    }
    
}