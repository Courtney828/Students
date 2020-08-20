// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let Students = [{StudentName:"", StudentSurname:"",StudentAge:"",  StudentGrade:""},
            {StudentName:"Courtney", StudentSurname:"Serongwa",StudentAge:13,StudentGrade:"G7"},
              {StudentName:"candy", StudentSurname:"Vile",StudentAge:14,StudentGrade:"G8"},
              {StudentName:"Palesa", StudentSurname:"Maja",StudentAge:15,StudentGrade:"G9"},
              {StudentName:"Given", StudentSurname:"Bile",StudentAge:10,StudentGrade:"G7"},
              {StudentName:"Tondi", StudentSurname:"Murwa",StudentAge:9,StudentGrade:"G6"},
              {StudentName:"James", StudentSurname:"Mohammed",StudentAge:11,StudentGrade:"G5"},
              {StudentName:"Keletso", StudentSurname:"Jab",StudentAge:18,StudentGrade:"G12"},
              {StudentName:"Ben", StudentSurname:"Kunutu",StudentAge:20,StudentGrade:"G12"
              }]
  


let max=40;  
var highest =0; 
var name="ben";
var surname = "kunutu";

for(var x= 0; x<Students.length; x++){
  if (Students[x].StudentAge<max){
     highest =Students[x].StudentAge;

  }
}

  console.log(name +" "+ surname + " " + highest)  ;
  



  