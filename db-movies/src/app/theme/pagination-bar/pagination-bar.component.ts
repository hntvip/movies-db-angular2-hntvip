import { PaginationService } from './pagination.service';
import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../../shared/db-moives.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit {
  page :number = 1;
  total: number;
  constructor(private moviesService: DbMoivesService, private paService: PaginationService) { }
  
  ngOnInit() {
    this.paService.changeSize.subscribe(total => {
      this.total = total;
    })
  }
  
  loadData(page: number){
    this.paService.changeCurrentPage(page);
  }
}
