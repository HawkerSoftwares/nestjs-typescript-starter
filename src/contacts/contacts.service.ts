import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {

    getView(): string {
        return 'pages/contact';
    }

}
