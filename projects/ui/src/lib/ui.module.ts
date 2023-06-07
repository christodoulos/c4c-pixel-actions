import { NgModule } from '@angular/core';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonOutlineComponent } from './button-outline/button-outline.component';

@NgModule({
  declarations: [ButtonPrimaryComponent, ButtonOutlineComponent],
  imports: [],
  exports: [ButtonPrimaryComponent, ButtonOutlineComponent],
})
export class UiModule {}
