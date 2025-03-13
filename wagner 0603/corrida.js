class Corrida {

    automovel=[];

    inscreverAutomovel(a){
        this.automovel.push(a)
    }

    largada(){
        for (let i = 0; i < automovel.length; i+ 1){
            let a = automovel[i]
            a.acelerar()
        }
    
}
 }

 class automovel{
    acelerar (){
        console.log ('vrumm...')


    }
 }





 

