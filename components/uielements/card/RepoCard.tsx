import { PropsWithChildren } from 'react'
import { ContributorCard } from './index';
import Button from '../button';
import Avatar from '../Avatar';

interface Props {
    type?: any,
  icon?: string,
  data?: repo,
  showContributors?: boolean,
  showLogo?: boolean,
  showStartButton?: boolean,
  handleOnStarRepository?: () => void,
}

interface repo {
    owner: {
        login: string,
        avatar_url: string,
    },
    name: string,
    description: string,
    contributors: contributor[],
    html_url: string,
    stargazers_count: number,
    forks_count?: number,
    watchers_count?: number,
};

interface contributor {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    type: string,
}

const RepoCard = (props: PropsWithChildren<Props>) => {

    const contributors = props.data?.contributors.slice(0, 10);

  return (
<div className="min-h-screen flex items-center justify-center px-4">
    <div className={`max-w-4xl min-h-screen bg-${props.type || 'white'}-500 rounded-lg shadow-xl`}>
        <div className="flex w-full">
            {props.showLogo && (
                <div className="w-2/12 p-4">
                    <Avatar rounded image={props.data?.owner?.avatar_url} />
                </div>
            )}
        
        <div className={(props.showLogo && props.showStartButton)? 'w-7/12 p-4' : ((!props.showLogo && props.showStartButton) || (props.showLogo && !props.showStartButton)) ? 'w-9/12 p-4' : 'w-full p-4'}>
            <h2 className="text-3xl uppercase text-white">
                {props.data?.name}
            </h2>
            <p className="text-sm text-gray-500">
            by {props.data?.owner?.login} 
            </p>
        </div>
        {props.showStartButton && (
            <div className="w-3/12 p-4">
                <div className="flex justify-center rounded-lg text-lg mb-4" role="group">
                    <Button className="rounded-r-none" onClick={props.handleOnStarRepository} prefixIcon={props.icon} size="small" variant="outlined" type="white"> Star this Repo </Button>
                    <Button className="rounded-l-none" size="small" variant="outlined" type="white"> {props.data?.stargazers_count} </Button>
                    </div>
            </div>
        )}
        </div>
        
        <div>
            <div className="w-full md:space-y-0 space-y-1 p-4 border-b text-gray-500">
                {props.data?.description}
            </div>
            {props.showContributors && (
                <div className="md:space-y-0 space-y-1 p-4 border-b">
                    <div className="flex items-center w-full pb-5 pt-2">
                        <h2 className="text-white">Top Contributors</h2>
                        </div>
                <div className="flex items-center w-full">
                    {contributors?.map(item => (
                    <div key={`contributir-${item.id}`} className="w-1/10">
                        <ContributorCard {...item} />
                    </div>
                    ))}
                </div>
                </div>
            )}
            
        </div>
    </div>
</div>
  )
}

export default RepoCard;