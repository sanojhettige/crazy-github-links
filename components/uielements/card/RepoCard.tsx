import { PropsWithChildren, useEffect, useState, useRef } from 'react'
import { ContributorCard } from './index';
import Button from '../button';
import Avatar from '../Avatar';
import ToolTip from '../ToolTip'

interface Props {
    type?: any,
  icon?: string,
  data?: repo,
  showContributors?: boolean,
  showLogo?: boolean,
  showStartButton?: boolean,
  handleOnStarRepository?: () => void,
  ref?: any,
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

const RepoCard = ({
    data,
    type,
    showLogo,
    showStartButton,
    handleOnStarRepository,
    icon,
    showContributors,
    ref,
    ...otherProps
}: Props) => {

    const contributors = data?.contributors.slice(0, 10);
    const textColor = ['slate-gray', 'secondary', 'sunset-orange'].includes(type) ? 'text-white' : 'text-gray-500';
    const bgColor = type === 'primary' ? 'bg-primary-500' : type === 'secondary' ? 'bg-secondary-500' : type === 'bubbles' ? 'bg-bubbles-500' : type === 'github' ? 'bg-github-500' : type === 'slate-gray' ? 'bg-slate-gray-500' : type === 'sunset-orange' ? 'bg-sunset-orange-500' : type === 'shark' ? 'bg-shark-500' : 'bg-white';

  return (
<div ref={ref} className="min-h-screen min-w-full flex items-center justify-center px-4">
    <div className={`max-w-4xl min-h-screen w-24 min-w-full ${bgColor} rounded-lg shadow-xl`}>
        <div className="flex w-full">
            {showLogo && (
                <div className="w-2/12 p-4">
                    <Avatar rounded image={data?.owner?.avatar_url} />
                </div>
            )}
        
        <div className={(showLogo && showStartButton)? 'w-6/12 p-4' : ((!showLogo && showStartButton) || (showLogo && !showStartButton)) ? 'w-9/12 p-4' : 'w-full p-4'}>
            <h2 className={`text-3xl uppercase ${textColor}`}>
                {data?.name}
            </h2>
            <p className={`text-sm ${textColor}`}>
            by {data?.owner?.login} 
            </p>
        </div>
        {showStartButton && (
            <div className="w-4/12 p-4">
                <div className="flex justify-center rounded-lg text-lg mb-4" role="group">
                    <Button className="rounded-r-none" onClick={handleOnStarRepository} prefixIcon={icon} size="small" variant="outlined" type="white"> Star this Repo </Button>
                    <Button className="rounded-l-none" size="small" variant="outlined" type="white"> {data?.stargazers_count} </Button>
                    </div>
            </div>
        )}
        </div>
        
        <div>
            <div className={`w-full md:space-y-0 space-y-1 p-4 border-b ${textColor}`}>
                {data?.description}
            </div>
            {showContributors && (
                <div className="md:space-y-0 space-y-1 p-4 border-b">
                    <div className="flex items-center w-full pb-5 pt-2">
                        <h2 className={textColor}>Top Contributors</h2>
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