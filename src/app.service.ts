import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getView(): string {
    return 'pages/index';
  }

}
