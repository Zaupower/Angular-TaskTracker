# Angular-TaskTracker
Angular:15 Application with documentation to make good Angular apps

Angular Notes:      

# String Interpolation
In anngular its possible to use string interpolation, witch is calling {{variableName}} in the app.component.html file, and declaring the variable and add the default value inside the class{} app.component.ts     
It is possible to use js methods inside like {{variableName.toUpperCase}}    

# ngOnInit():     
Functuion that run when a component is called, it is used to call other functions
to set up initial values for example

# Embbed components
To use a component inside another, jus call in html <app-componentName></app-componentName>     
It's  allways a good ideia to wrap components with a container like:     
<div class="container">     
  <app-componentName></app-componentName>    
</div>      

# Passing information from one component to another    
In Angular its possible to call one component inside another by Embbeding, and add values like this <app-componentName text="someValue"></app-componentName> 
that can be instantiated inside the componentName.component.ts class
using '@Input() text: string | undefined;' inside the class, then, inside the html component that receives the values it is possible to get the value using string Interpolation, {{text}}.     
To use that values has css style they should be used inside ngStyle like:
<button [ngStyle]="{ 'background-color': inputedColorString }">      

# Events
For events like button click just add <button (click)="onClick()">, and inside the component class add onClick() function.

# Events, calling mother component events from child component     
To make this is nessessary to add on mother component html file:     <app-childComponent (btnClick)="toggleAddTask()">     
And on the mother component class file:          
toggleAddTask(){    
    console.log('toggle')    
  }    
On the child component class file:     
@Output() btnClick = new EventEmitter()       
       
 public onClick(){     
    this.btnClick.emit();     
  }     
On the child html:      
<button class="btn" (click)="onClick()"> {{text}} </button>   

# Loop over array of elements in Html
Use <p *ngFor="let task of tasks">{{task.text}}</p> 
Note: tasks should be defined in class has array of objects      



