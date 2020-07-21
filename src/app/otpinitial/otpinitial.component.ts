import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otpinitial',
  templateUrl: './otpinitial.component.html',
  styleUrls: ['./otpinitial.component.css']
})
export class OtpinitialComponent implements OnInit {

  public testForm: FormGroup;
  public radiogroup: FormGroup;

option3Disable=true;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.testForm = this.fb.group({
     'radiogroup': this.fb.group({
            'option1': [],
            'option2': [],
            'option3': [],
        })
    });
  }
}