import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  ngOnInit(): void {
    console.log('ngOnInit Called');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges Called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
  }

}
