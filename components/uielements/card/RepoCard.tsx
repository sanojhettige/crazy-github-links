import { PropsWithChildren } from 'react'
import { ContributorCard } from './index';
import Button from '../button';
import Avatar from '../Avatar';

interface Props {
    type?: 'primary' | 'secondary',
  icon?: string,
  data?: repo,
  showContributors?: boolean,
  showLogo?: boolean,
  showStartButton?: boolean,
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
};

interface contributor {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    type: string,
}

interface colorDataProps  {
    bg: string,
}

const RepoCard = (props: PropsWithChildren<Props>) => {

    const contributors = props.data?.contributors.slice(0, 10);

  return (
<div className="min-h-screen flex items-center justify-center px-4">
    <div className={`max-w-4xl  bg-${props.type || 'white'}-500 w-full rounded-lg shadow-xl`}>
        <div className="flex w-full">
            {props.showLogo && (
                <div className="w-3/12 p-4">
                    <Avatar rounded image={props.data?.owner?.avatar_url} />
                </div>
            )}
        
        <div className={(props.showLogo && props.showStartButton)? 'w-6/12 p-4' : ((!props.showLogo && props.showStartButton) || (props.showLogo && !props.showStartButton)) ? 'w-9/12 p-4' : 'w-full p-4'}>
            <h2 className="text-3xl uppercase text-white-100">
                {props.data?.name}
            </h2>
            <p className="text-sm text-gray-500">
            by {props.data?.owner?.login} 
            </p>
        </div>
        {props.showStartButton && (
            <div className="w-3/12 p-4">
                <Button prefixIcon="aaa" size="small" variant="outlined" type="secondary"> Add a Start </Button>
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
                        <h2 className="text-white-500">Top Contributors</h2>
                        </div>
                <div className="flex items-center w-full">
                    {contributors?.map(item => (
                    <div className="w-1/10">
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