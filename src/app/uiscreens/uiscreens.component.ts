import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-uiscreens',
  templateUrl: './uiscreens.component.html',
  styleUrls: ['./uiscreens.component.css']
})
export class UiscreensComponent implements OnInit {
  form = new FormGroup({
    input1: new FormControl('', Validators.required),
    input2: new FormControl('', Validators.required),
    input3: new FormControl('', Validators.required),
    input4: new FormControl('', Validators.required),
    input5: new FormControl('', Validators.required),
    
     });
    constructor() { }

    ngOnInit() {
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}