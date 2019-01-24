import { IsString, IsDefined, MinLength } from 'class-validator';
export namespace FeedbackDTO {

    export class Add {
        @IsString()
        @IsDefined()
        @MinLength(2)
        title: string

        @IsString()
        @IsDefined()
        @MinLength(2)
        description: string

        @IsString()
        @IsDefined()
        @MinLength(2)
        location: string

        @IsString()
        @IsDefined()
        @MinLength(2)
        url: string
    }
}