import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  BindingData = [{url:'http://wallpaperheart.com/wp-content/uploads/2018/04/water-sceneries-hd.jpg', name:'The water valley'},
  {url:'http://wallpaperheart.com/wp-content/uploads/2018/04/trees-sceneries-hd.jpg', name:'Greenary favory'},
  {url:'http://wallpaperheart.com/wp-content/uploads/2018/04/snow-sceneries-hd.jpg', name:'Snow wow'},
  {url:'http://wallpaperheart.com/wp-content/uploads/2018/04/Scenery-HD-Wallpapers-sceneries-hd.jpg', name:'Scenery'},
  {url:'http://wallpaperheart.com/wp-content/uploads/2018/04/scenery-hd-wallpaper_sceneries-hd.jpg', name:'Beautiful place'},
  {url:'http://wallpaperheart.com/wp-content/uploads/2018/04/road-sceneries-hd.jpg', name:'Dream Road'}]
}
