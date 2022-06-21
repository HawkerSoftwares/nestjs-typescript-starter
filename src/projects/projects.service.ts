import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    getView(): string {
        return 'pages/projects';
    }

}
