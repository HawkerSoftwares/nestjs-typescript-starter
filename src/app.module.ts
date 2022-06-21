import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [AboutModule, TechnologiesModule, ProjectsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
