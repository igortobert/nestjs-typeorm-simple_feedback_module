import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feedback } from "./feedback.entity";
import { FeedbackDTO } from "./feedback.dto";

@Injectable()
export class FeedbackService {
    constructor(
        @InjectRepository(Feedback) private readonly Feedback: Repository<Feedback>
    ) { }

    async addFeedback(addFeedback: FeedbackDTO.Add, userId: number): Promise<number> {
        let newFeedback: Feedback = {
            title: addFeedback.title,
            description: addFeedback.description,
            location: addFeedback.location,
            url: addFeedback.url,
            emmiter: { id: userId }
        }
        const created = await this.Feedback.create(newFeedback)
        const saved = await this.Feedback.save(created)
        return saved.id
    }

    async getAllFeedbacks(): Promise<Feedback[]> {
        return await this.Feedback.createQueryBuilder('f')
            .leftJoinAndSelect('f.emmiter', 'emmiter')
            .getMany()
    }

    async getFeedbackById(id: number): Promise<Feedback> {
        return await this.Feedback.createQueryBuilder('f')
            .leftJoinAndSelect('f.emmiter', 'emmiter')
            .whereInIds(id)
            .getOne()
    }

}