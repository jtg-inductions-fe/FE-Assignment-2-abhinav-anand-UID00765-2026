export { baseApi } from './base';
export {
    githubApi,
    useGetGithubUserQuery,
    useLoginUserMutation,
    useSearchGithubUsersQuery,
    followApi,
    useCheckIfFollowingQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from './github';

export type { GitHubUser, GithubUserList, GitHubUserListItem } from './github';
