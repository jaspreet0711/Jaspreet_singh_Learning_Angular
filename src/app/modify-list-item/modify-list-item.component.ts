import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CricketPlayerService} from "../services/cricket-player.service";
import {Router} from "@angular/router";
import {Cricket} from "../Shared/Models/Cricket";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {
  cricketForm: FormGroup


  constructor(
    private fb: FormBuilder,
    private service: CricketPlayerService,
    private router: Router
  ) {
    this.cricketForm = this.fb.group({
      id: [service.generateNewId()],
      playerName: ['', Validators.required],
      age: [''],
      team: [''],
      jerseyNumber: [''],
      rating: [''],
      isRetired: [false]
    });
  }

  onSubmit(): void{
    if (this.cricketForm.valid){
      const player: Cricket = this.cricketForm.value;

      if (player.id) {
        this.service.updatePlayer(player)
      } else {
        const newId = this.service.generateNewId();
        player.id = newId
        this.service.addPlayer(player)
      }
          this.router.navigate(['/Players']);
      }
    }




  onDelete(): void{
    const id = this.cricketForm.get('id')?.value;

    if (id){
      this.service.deletePlayer(id)
      this.router.navigate(['/Players']);

    }
  }


}
