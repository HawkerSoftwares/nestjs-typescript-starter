import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {

    getView(): string {
        return 'pages/about';
    }

}
