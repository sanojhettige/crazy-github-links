import React from 'react';
import { getHiddenProps } from '../../../../stories/utils';
import { RepoCard } from '../index';
import 'tailwindcss/tailwind.css';
import "../../../../assets/css/theme.css"

export default {
  title: 'UI Elements/Repository Card',
  component: RepoCard,
  argTypes: {
    ...getHiddenProps(['avatar_url', 'html_url', 'contributors', 'data']),
  },
};

const getProps = args => {
    args.data = {
        owner: {
            login: args.authorName,
            avatar_url: args.avatar_url,
        },
        name: args.repoName,
        description: args.description,
        contributors: args.contributors,
        html_url: '',
    }
    return args;
}

const Template = args => <RepoCard {...getProps(args)} />;

export const RepositoryCard = Template.bind({});
RepositoryCard.args = {
    type: 'primary',
    icon: '',
    showContributors: true,
    showLogo: true,
    showStartButton: true,
    authorName: 'Repo Author',
    avatar_url: 'https://via.placeholder.com/150',
    repoName: 'name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    contributors: [
        {
            login: 'Contributor 1',
            id: 1,
            avatar_url: 'https://via.placeholder.com/150',
            html_url: '',
            type: '',
        },
        {
            login: 'Contributor 1',
            id: 1,
            avatar_url: 'https://via.placeholder.com/150',
            html_url: '',
            type: '',
        },
        {
            login: 'Contributor 1',
            id: 1,
            avatar_url: 'https://via.placeholder.com/150',
            html_url: '',
            type: '',
        },
        {
            login: 'Contributor 1',
            id: 1,
            avatar_url: 'https://via.placeholder.com/150',
            html_url: '',
            type: '',
        }
    ],
    html_url: '',
};
