import EmailIcon from '@mui/icons-material/Email';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import GroupIcon from '@mui/icons-material/Group';
import LinkIcon from '@mui/icons-material/Link';
import LocationIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import type { GitHubUser } from '@services';

export const mapGithubProfile = (profileData: GitHubUser | undefined) => {
    if (!profileData) return null;

    const card = {
        image: {
            url: profileData.avatar_url,
            alt: profileData.login,
        },
        title: profileData.name ?? profileData.login,
        subtitle: `@${profileData.login}`,
        description: profileData.bio,
    };

    const action = {
        label: 'Visit profile on GitHub',
        url: profileData.html_url,
    };

    const stats = {
        stats: [
            { label: 'Repos', value: profileData.public_repos },
            { label: 'Followers', value: profileData.followers },
            { label: 'Following', value: profileData.following },
        ],
    };

    const detailItems = {
        items: [
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

    const metrics =
        profileData.total_private_repos !== undefined
            ? {
                  metrics: [
                      {
                          icon: (
                              <FolderSpecialIcon
                                  color="primary"
                                  fontSize="small"
                              />
                          ),
                          label: 'Private Repos',
                          value: profileData.total_private_repos,
                      },
                      ...(profileData.collaborators !== undefined
                          ? [
                                {
                                    icon: (
                                        <GroupIcon
                                            color="primary"
                                            fontSize="small"
                                        />
                                    ),
                                    label: 'Collabs',
                                    value: profileData.collaborators,
                                },
                            ]
                          : []),
                      ...(profileData.plan?.name
                          ? [
                                {
                                    icon: (
                                        <WorkspacePremiumIcon
                                            color="warning"
                                            fontSize="small"
                                        />
                                    ),
                                    label: 'Plan',
                                    value: profileData.plan.name.toUpperCase(),
                                },
                            ]
                          : []),
                  ],
                  progress:
                      profileData.plan?.space &&
                      profileData.disk_usage !== undefined
                          ? {
                                label: 'Storage Capacity',
                                text: `${(profileData.disk_usage / 1024).toFixed(1)} MB / ${(profileData.plan.space / 1024).toFixed(1)} MB`,
                                percent: Math.min(
                                    (profileData.disk_usage /
                                        profileData.plan.space) *
                                        100,
                                    100,
                                ),
                                color:
                                    profileData.disk_usage /
                                        profileData.plan.space >
                                    0.8
                                        ? ('error' as const)
                                        : ('primary' as const),
                            }
                          : undefined,
              }
            : null;

    return { card, action, stats, detailItems, metrics };
};
