import { AppModule } from './app/app.module';
import qpress, { QExpress } from '@qpress/core';

var app: QExpress = qpress();

app.attachModule(AppModule);

app.runApp();