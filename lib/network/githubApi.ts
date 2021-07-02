import { AxiosInstance, AxiosResponse } from "axios";
import ApiRepository from "./network";
import { GithubRepositoryType } from "./types/GithubRepositoryType";

interface GithubUsername {
  username: string;
}

interface GetUserRepositoriesRequest extends GithubUsername {
  perPage?: number;
}

interface GetUserRepositoryRequest extends GithubUsername {
  repository: string;
}

export class GithubRepository {
  public githubRepo: AxiosInstance;

  constructor() {
    this.githubRepo = ApiRepository({
      baseURL: process.env.GITHUB_API_URL,
      headers: {
        Accept: "application/vnd.github.v3+json",
        ["User-Agent"]: process.env.NEXT_PUBLIC_GITHUB_USER,
        Authorization: `token ${process.env.GITHUB_OAUTH_TOKEN}`,
      },
    });
  }

  async getUser(username: GithubUsername): Promise<AxiosResponse> {
    return await this.githubRepo.get(`/users/${username}`);
  }

  async getUserRepositories({
    username,
    perPage = 30,
  }: GetUserRepositoriesRequest): Promise<
    AxiosResponse<GithubRepositoryType[]>
  > {
    return await this.githubRepo.get(
      `/users/${username}/repos?per_page=${perPage}`
    );
  }

  async getUserRepository({
    username,
    repository,
  }: GetUserRepositoryRequest): Promise<AxiosResponse<GithubRepository>> {
    return await this.githubRepo.get(`/repos/${username}/${repository}`);
  }
}
