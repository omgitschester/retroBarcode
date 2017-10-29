import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorArray = [];
  
    runColor(){
      for(let i = 0; i< 77; i++){
        const randomNum = (Math.floor(Math.random() * 6) ) + 1;
        if (randomNum === 1){
          this.colorArray.push('orange');
        }else if (randomNum === 2){
          this.colorArray.push('blue');
        }else if(randomNum === 3){
          this.colorArray.push('green');
        }else if(randomNum === 4){
          this.colorArray.push('pink');
        }else if (randomNum === 5){
          this.colorArray.push('yellow');
        }else if(randomNum === 6){
          this.colorArray.push('purple');
        }
      }
    }
  
    ngOnInit() {
      this.runColor();
  }
  }