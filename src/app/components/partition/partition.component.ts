import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {
  
  @Input() background: string | undefined;
  @Input() height: number | undefined;
  @Input() width: number | undefined;
  @Input() position: string | undefined;
  @Input() y_pos: number | undefined;
  @Input() x_pos: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
