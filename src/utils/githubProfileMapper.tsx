import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import LocationIcon from '@mui/icons-material/LocationOn';

import type { GitHubUser } from '@services';

export const mapGithubProfile = (profileData: GitHubUser | undefined) => {
    if (!profileData) return null;

    const card = {
        imageUrl: profileData.avatar_url,
        imageAlt: profileData.login,
        title: profileData.name ?? profileData.login,
        subtitle: `@${profileData.login}`,
        description: profileData.bio,
        actionLabel: 'Visit profile on GitHub',
        actionUrl: profileData.html_url,
        stats: [
            { label: 'Repos', value: profileData.public_repos },
            { label: 'Followers', value: profileData.followers },
            { label: 'Following', value: profileData.following },
        ],
        infoItems: [
            ...(profileData.email
                ? [
                      {
                          icon: <EmailIcon fontSize="small" color="action" />,
                          text: profileData.email,
                      },
                  ]
                : []),
            ...(profileData.location
                ? [
                      {
                          icon: (
                              <LocationIcon fontSize="small" color="action" />
                          ),
                          text: profileData.location,
                      },
                  ]
                : []),
            ...(profileData.blog
                ? [
                      {
                          icon: <LinkIcon fontSize="small" color="action" />,
                          text: profileData.blog,
                          url: /^https?:\/\//i.test(profileData.blog)
                              ? profileData.blog
                              : `https://${profileData.blog}`,
                      },
                  ]
                : []),
        ],
    };

    return { card };
};
