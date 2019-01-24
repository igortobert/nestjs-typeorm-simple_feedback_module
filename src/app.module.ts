import { Module } from '@nestjs/common';
import { FeedbackModule } from './Modules/Feedback/feedback.module';

@Module({
  imports: [FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
