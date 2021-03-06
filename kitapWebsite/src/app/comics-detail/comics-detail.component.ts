import { Component, OnInit, Input } from '@angular/core';
import { Comics} from '../comics';
import {ComicsService} from '../comics.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {
  @Input() comics: Comics;
  constructor(private route: ActivatedRoute, private service: ComicsService) { }
  ngOnInit(): void {
    this.getComics();
  }
  // getComics(){
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.service.getComics(id).subscribe(comics => this.comics = comics);
  // }
  getComics(){
    const id = +this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('comic_category_name');
    this.service.getComics(name, id).subscribe(comics => this.comics = comics);
  }
}
