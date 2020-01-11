import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { MainComponent }   from './main/main.component';
import { AuthComponent }   from './auth/auth.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
      path: 'session',loadChildren: () =>
      import('./session/session.module').then(m =>m.SessionDemoModule)
   },
   {
   path: '',
   component: MainComponent,
   // canActivate: [AuthGuard],
   // runGuardsAndResolvers: 'always',
   children: [{
      path: 'dashboard', loadChildren: ()=> 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },{
      path: 'dash-widget',loadChildren: ()=> 
      import('./dashboard-widgets/dashboard-widgets.module').then(m => m.DashboardWidgetsModule)
   },{
      path: 'inbox',loadChildren: ()=>
      import('./inbox/inbox.module').then(m => m.InboxModule)
   },{
      path: 'taskboard',loadChildren: ()=>
      import('./taskboard/taskboard.module').then(m => m.TaskboardModule)
   },{
      path: 'chat',loadChildren: ()=>
      import('./chat/chat.module').then (m => m.ChatModule)
   },{
      path: 'calendar',loadChildren: ()=>
      import('./calendar/calendar.module').then (m => m.CalendarDemoModule)
   },{
      path: 'ui-elements',loadChildren: ()=>
      import('./ui-elements/ui-elements.module').then (m => m.UiElementsModule)
   },{
      path: 'components',loadChildren: ()=>
      import('./components/components.module').then (m => m.ComponentDemoModule)
   },{
      path: 'icons',loadChildren: ()=>
      import('./icons/icons.module').then (m => m.IconsModule)
   },{
      path: 'forms',loadChildren: ()=>
      import('./forms/forms.module').then (m => m.FormsDemoModule)
   },{
      path: 'tables',loadChildren: ()=>
      import('./tables/tables.module').then (m => m.TablesDemoModule)
   },{
      path: 'editor',loadChildren: ()=>
      import('./editor/editor.module').then (m => m.EditorModule)
   },{
      path: 'chart',loadChildren: ()=>
      import('./chart/charts.module').then (m => m.ChartDemoModule)
   },{
      path: 'dragndrop',loadChildren: ()=>
      import('./drag-and-drop/dragndrop.module').then (m => m.DragDropDemoModule)
   },{
      path: 'resizable',loadChildren: ()=>
      import('./resizable/resizable.module').then (m => m.ResizableDemoModule)
   },{
      path: 'ngx-toaster',loadChildren: ()=>
      import('./ngx-toaster/toaster.module').then (m => m.ToasterDemoModule)
   },{
      path: 'animation',loadChildren: ()=>
      import('./animation/animation.module').then (m => m.AnimationDemoModule)
   },{
      path: 'maps',loadChildren: ()=>
      import('./maps/maps.module').then (m => m.MapsDemoModule)
   },{
      path: 'user-pages',loadChildren: ()=>
      import('./user-pages/users.module').then (m => m.UsersDemoModule)
   },{
      path: 'pages',loadChildren: ()=>
      import('./custom-pages/pages.module').then (m => m.PagesDemoModule)
   },{
      path: 'blog',loadChildren: ()=>
      import('./blog/blogs.module').then (m => m.BlogsDemoModule)
   },{
      path: 'gallery',loadChildren: ()=>
      import('./gallery/gallery.module').then(m => m.GalleryDemoModule)
   },{
      path: 'ecommerce',loadChildren: ()=>
      import('./ecommerce/ecommerce.module').then(m => m.EcommerceDemoModule)
   },{
      path: 'video-player',loadChildren: ()=>
      import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
   },{
      path: 'courses',loadChildren: ()=>
      import('./courses/courses.module' ).then(m => m.CoursesModule)
   },{
      path: 'user-management',loadChildren: ()=>
      import('./user-manage/user-manage.module').then(m => m.UserManageModule)
   }],
   },
   {
      path: 'horizontal',
      component: HorizontalLayoutComponent,
      children: [{
         path: '',loadChildren: ()=>
         import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
         path: 'dashboard',loadChildren: ()=>
         import('./dashboard/dashboard.module').then(m => m. DashboardModule)
      },{
         path: 'dash-widget',loadChildren: ()=>
         import('./dashboard-widgets/dashboard-widgets.module').then(m => m.DashboardWidgetsModule)
      },{
         path: 'inbox',loadChildren: ()=>
         import('./inbox/inbox.module').then(m => m.InboxModule)
      },{
         path: 'taskboard',loadChildren: ()=>
         import('./taskboard/taskboard.module').then(m => m.TaskboardModule)
      },{
         path: 'chat',loadChildren: ()=>
         import('./chart/charts.module').then (m => m.ChartDemoModule)
      },{
         path: 'calendar',loadChildren: ()=>
         import('./calendar/calendar.module').then (m => m.CalendarDemoModule)
      },{
         path: 'ui-elements',loadChildren: ()=>
         import('./ui-elements/ui-elements.module').then (m => m.UiElementsModule)
      },{
         path: 'components',loadChildren: ()=>
         import('./components/components.module').then (m => m.ComponentDemoModule)
      },{
         path: 'icons',loadChildren: ()=>
         import('./icons/icons.module').then (m => m.IconsModule)
      },{
         path: 'forms',loadChildren: ()=>
         import('./forms/forms.module').then (m => m.FormsDemoModule)
      },{
         path: 'tables',loadChildren: ()=>
         import('./tables/tables.module').then (m => m.TablesDemoModule)
      },{
         path: 'editor',loadChildren: ()=>
         import('./editor/editor.module').then (m => m.EditorModule)
      },{
         path: 'chart',loadChildren: ()=>
         import('./chart/charts.module').then (m=> m.ChartDemoModule)
      },{
         path: 'dragndrop',loadChildren: ()=>
         import('./drag-and-drop/dragndrop.module').then (m => m.DragDropDemoModule)
      },{
         path: 'resizable',loadChildren: ()=>
         import('./resizable/resizable.module').then (m => m.ResizableDemoModule)
      },{
         path: 'ngx-toaster',loadChildren: ()=>
         import('./ngx-toaster/toaster.module').then (m => m.ToasterDemoModule)
      },{
         path: 'animation',loadChildren: ()=>
         import('./animation/animation.module').then (m => m.AnimationDemoModule)
      },{
         path: 'maps',loadChildren: ()=>
         import('./maps/maps.module').then (m => m.MapsDemoModule)
      },{
         path: 'user-pages',loadChildren: ()=>
         import('./user-pages/users.module').then (m => m.UsersDemoModule)
      },{
         path: 'pages',loadChildren: ()=>
         import('./custom-pages/pages.module').then (m => m.PagesDemoModule)
      },{
         path: 'blog',loadChildren: ()=>
         import('./blog/blogs.module').then (m => m.BlogsDemoModule)
      },{
         path: 'gallery',loadChildren: ()=>
         import('./gallery/gallery.module').then(m => m.GalleryDemoModule)
      },{
         path: 'ecommerce',loadChildren: ()=>
         import('./ecommerce/ecommerce.module').then(m => m.EcommerceDemoModule)
      },{
         path: 'video-player',loadChildren: ()=>
         import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
      },{
         path: 'courses',loadChildren: ()=>
         import('./courses/courses.module' ).then(m => m.CoursesModule)
      },{
         path: 'user-management',loadChildren: ()=>
         import('./user-manage/user-manage.module').then(m => m.UserManageModule)
      }],
   },
   {
      path: '**',
      redirectTo: 'session'
   }
   ];
  
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }

