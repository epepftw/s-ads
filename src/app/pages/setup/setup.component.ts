import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  title: string = "Downloading Some Updates from Database";
  count: number = 5;

  constructor(private _router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this._router.navigate(['play'])
    }, 5000)
  }

}
