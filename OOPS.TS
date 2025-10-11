// constructor is not human it is human maker

class BottleMaker {
     constructor(public name:string, public price:number){

     }
}

let b1 = new BottleMaker("Milton",1200);

class Music {
     constructor(public name:string, public artist:string, public thumbnail:string = 'something.jpg', public length:number ){
          if(!thumbnail){
               this.thumbnail = 'something.jpg';
          }
     }
}

let music1 = new Music('cool','Kunal', '' ,4.10);


// public private and protected

class MobileMaker {
     protected company = 'apple'
     constructor(public name:string){

     }
}

class AiMobileMaker extends MobileMaker {

     public aiFeature = 'updates'
   
     changeName(){
          this.name='samsung';
     }
}

let m1 = new AiMobileMaker('iphone');

// m1.company = 'a'  // since it is protected so it will give an error
// we can change aiFeature since it is public