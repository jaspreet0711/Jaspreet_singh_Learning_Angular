import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CricketPlayerService} from "../services/cricket-player.service";
import {Router} from "@angular/router";
import {Cricket} from "../Shared/Models/Cricket";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
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
      isRetired: [false]

    });
  }

  onSubmit(): void{
    if (this.cricketForm.valid){
      const player: Cricket = this.cricketForm.value;

      if (player.playerName) {
        this.service.updatePlayer(player.id, player)
      } else {
        player.id = this.service.generateNewId();
        this.service.addPlayer(player)
      }
          this.router.navigate(['/Players']);
      }
    }




  onDelete(): void{
    const name = this.cricketForm.get('playerName')?.value;

    if (name){
      this.service.deletePlayer(name)
      this.router.navigate(['/Players']);

    }
  }


}
