import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { timer, pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HOME } from '../_constants/url-paths';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private _router: Router) { }

  ngOnInit() {
    timer(4500).pipe(takeUntil(this.unsubscribe))
      .subscribe(time => this._router.navigateByUrl(HOME));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}