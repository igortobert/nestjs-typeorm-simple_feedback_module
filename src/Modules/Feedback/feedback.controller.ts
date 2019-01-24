import { HttpCode, Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UserId } from "../../Decorators/User.decorator";
import { FeedbackDTO } from "./feedback.dto";
import { FeedbackService } from "./feedback.service";
import { Feedback } from "./feedback.entity";

@Controller('feedback')
export class FeedbackController {
    constructor(
        private readonly FeedbackService: FeedbackService
    ) { }

    @Get()
    async getAllFeedbacks(): Promise<Feedback[]> {
        return await this.FeedbackService.getAllFeedbacks()
    }

    @Get(':id')
    async getFeedbackById(@Param('id') id: number): Promise<Feedback> {
        return await this.FeedbackService.getFeedbackById(id)
    }

    @HttpCode(200)
    @Post()
    async newFeedback(@Body() newFeedback: FeedbackDTO.Add, @UserId() userId): Promise<number> {
        return await this.FeedbackService.addFeedback(newFeedback, userId)
    }
}


