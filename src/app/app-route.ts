import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurant', component: RestaurantComponent },
  {
    path: 'restaurant/:id',
    component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  }
]
