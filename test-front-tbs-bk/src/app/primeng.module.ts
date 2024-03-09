import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
    exports: [
      AvatarModule,
      DialogModule,
      CardModule,
      ImageModule,
      ProgressSpinnerModule,
      SkeletonModule,
      TableModule,
      ToolbarModule
    ]
})

export class PrimeNgModule {}