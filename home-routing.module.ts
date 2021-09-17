import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'enrolled-member-base',
    loadChildren: () =>
      import('./enrolled-member-base/enrolled-member-base.module').then(
        (m) => m.EnrolledMemberBasePageModule
      ),
  },
  {
    path: 'business-generated',
    loadChildren: () =>
      import('./business-generated/business-generated.module').then(
        (m) => m.BusinessGeneratedPageModule
      ),
  },
  {
    path: 'get-free-sms-wa',
    loadChildren: () =>
      import('./get-free-sms-wa/get-free-sms-wa.module').then(
        (m) => m.GetFreeSmsWaPageModule
      ),
  },
  {
    path: 'redemption-rate',
    loadChildren: () =>
      import('./redemption-rate/redemption-rate.module').then(
        (m) => m.RedemptionRatePageModule
      ),
  },
  {
    path: 'know-your-member',
    loadChildren: () =>
      import('./know-your-member/know-your-member.module').then(
        (m) => m.KnowYourMemberPageModule
      ),
  },
  {
    path: 'member-webpage-performance',
    loadChildren: () =>
      import(
        './member-webpage-performance/member-webpage-performance.module'
      ).then((m) => m.MemberWebpagePerformancePageModule),
  },
  {
    path: 'upload-base-conversion',
    loadChildren: () =>
      import('./upload-base-conversion/upload-base-conversion.module').then(
        (m) => m.UploadBaseConversionPageModule
      ),
  },
  {
    path: 'campaign-performance',
    loadChildren: () =>
      import('./campaign-performance/campaign-performance.module').then(
        (m) => m.CampaignPerformancePageModule
      ),
  },
  {
    path: 'need-attention',
    loadChildren: () =>
      import('./need-attention/need-attention.module').then(
        (m) => m.NeedAttentionPageModule
      ),
  },
  {
    path: 'search-member',
    loadChildren: () =>
      import('./search-member/search-member.module').then(
        (m) => m.SearchMemberPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
