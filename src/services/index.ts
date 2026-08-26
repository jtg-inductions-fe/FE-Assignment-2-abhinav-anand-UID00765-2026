export { githubApi } from './githubApi/index';

export {
    useGetGithubUserQuery,
    useSearchGithubUsersQuery,
} from './githubApi/SearchUser.service';

export type {
    GitHubUser,
    GitHubUserListItem,
    GithubUserList,
} from './githubApi/githubApi.types';
