import { UseCase } from "@/kernel/contracts";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { ResponseApi } from "@/kernel/types";
import { PeopleRepository } from "./ports/people.repository";

export class GetAllPeopleInteractor implements UseCase<number, ResponseApi<AllPeopleDto>>{
  constructor(private readonly peopleRepository: PeopleRepository) {}
  execute(page?: number | undefined): Promise<ResponseApi<AllPeopleDto>> {
    if (!page) {
      page = 1;
    }

    return this.peopleRepository.getAllPeople(page);
  }
}
