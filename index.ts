// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let Students = [{StudentName:"", StudentSuname:"",StudentAge:"",  StudentGrade:""},
            {StudentName:"Courtney", StudentSuname:"Serongwa",StudentAge:13,StudentGrade:"G7"},
              {StudentName:"candy", StudentSuname:"Vile",StudentAge:14,StudentGrade:"G8"},
              {StudentName:"Palesa", StudentSuname:"Maja",StudentAge:15,StudentGrade:"G9"},
              {StudentName:"Given", StudentSuname:"Bile",StudentAge:10,StudentGrade:"G7"},
              {StudentName:"Tondi", StudentSuname:"Murwa",StudentAge:9,StudentGrade:"G6"},
              {StudentName:"James", StudentSuname:"Mohammed",StudentAge:11,StudentGrade:"G5"},
              {StudentName:"Keletso", StudentSuname:"Jab",StudentAge:18,StudentGrade:"G12"},
              {StudentName:"Ben", StudentSuname:"Kunutu",StudentAge:20,StudentGrade:"G12"
              }]
  


let max=40;  
var highest =0; 
for(var x= 0; x<Students.length; x++){
  if (Students[x].StudentAge<max){
     highest =Students[x].StudentAge;
    
  }
}

  console.log(highest);
  