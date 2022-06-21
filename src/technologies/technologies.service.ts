import { Injectable } from '@nestjs/common';

@Injectable()
export class TechnologiesService {

    getView(): string {
        return 'pages/technologies';
    }

}
