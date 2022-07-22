// let getA = a => a;

// console.log(getA(1));

// let square = (a) => { return a*a };

// console.log(square(4));

// let multiply = (a,b) => {return a*b };
// console.log(multiply(4,8));

// var x = function() {
    
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1);
// }

// var y = (...n) => {
//     console.log(n[0])
// };
// x(1,2,3);

class student{



    static count=0;  

   constructor(name,age,phone_number,marks){

       this.name=name;

       this.age=age;

       this.phone_number=phone_number;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){    

       return(student.count++);

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }
   setPlacemetnAge(minPlacementAge){
    return (minmarks) => {
        if(this.marks > minmarks && this.age > minPlacementAge){
            console.log(this.name + " is ready for placement")
        }
        else{
            console.log(this.name + " is not ready for placement")
        }
    }
   }



}

const Lakshya=new student('Lakshya',24,1234,80);

const Sagar=new student('Sagar',30,2345,35);

const Rana=new student('Rana',22,4567,55);

const Manas=new student('Manas',27,7891,34);

const Rishabh=new student('Rishabh',25,3456,70);

console.log(student.countStudent());

Lakshya.eligible();

Sagar.eligible();

Manas.eligible();

Rana.eligible();

Rishabh.eligible();

Lakshya.setPlacemetnAge(20)(50);

Sagar.setPlacemetnAge(24)(65);

Manas.setPlacemetnAge(26)(75);

Rana.setPlacemetnAge(23)(50);

Rishabh.setPlacemetnAge(18)(35);





