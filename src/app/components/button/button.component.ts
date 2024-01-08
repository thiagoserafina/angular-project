import { Component } from '@angular/core';
import { FetchServiceService } from '../../services/fetch-service.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  btnTxts = ['Button 1', 'Button 2', 'Button 3'];
  btnTxtIdx = 0;

  constructor(private fetchService: FetchServiceService) {}

  ngOnInit(): void {}

  onClick(): void {
    // this.fetchService
    //   .fetchData()
    //   .pipe()
    //   .forEach((data) => {
    //     console.log(data);
    //   });
    this.btnTxtIdx = (this.btnTxtIdx + 1) % this.btnTxts.length; // 0, 1, 2, 0, 1, 2, ...
  }
}
