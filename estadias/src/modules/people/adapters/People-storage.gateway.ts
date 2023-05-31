import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { PeopleRepository } from "../uses-cases/ports/people.repository";
import api from "@/config/http-client.gategay";

export class PeopleStorageWategay implements PeopleRepository {
  async getAllPeople(page: number): Promise<ResponseApi<AllPeopleDto>> {
    const res = await api.doGet(`/users?page=${page}`);
    return {
      status: res.status,
      entity: res.data,
    } as ResponseApi<AllPeopleDto>;
  }
}
