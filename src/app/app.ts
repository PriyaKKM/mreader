import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mreader');
  choosen:string=''
  result:string=''
  ChoosenNumber(event:any){
    if(event.target.value<=10 && event.target.value>=1){
        this.choosen='You have choosen:'+event.target.value
        if(event.target.value==1){
          this.result="People often judge others within seconds of meeting them."
        }
        else if(event.target.value==2){
          this.result="The brain tends to remember emotional moments better than neutral ones."
        }
        else if(event.target.value==3){
          this.result="People are usually more creative when they are relaxed."
        }else if(event.target.value==4){
          this.result="Laughing can make someone seem more attractive and likable."
        }else if(event.target.value==5){
          this.result="We often notice mistakes in others faster than in ourselves."
        }
        else if(event.target.value==6){
          this.result="Music can trigger strong memories because the brain links songs with experiences."
        }else if(event.target.value==7){
          this.result="Overthinking can increase stress and make decisions harder."
        }else if(event.target.value==8){
          this.result="People are more likely to continue something once they have already invested time in it."
        }
        else if(event.target.value==9){
          this.result="Humans are heavily influenced by social proof, meaning we often follow what others do."
        }else if(event.target.value==10){
          this.result="Sleep and mood are closely connected; poor mood can affect sleep, and poor sleep can affect mood."
        }

    }else{
      alert("Plese enter the value between 1 to 10.")
      window.location.reload()
    }
  } 
  Restart(){
    window.location.reload()
  }
}
