import { PropsWithChildren } from 'react'
import Avatar from '../Avatar';

interface Props {
    author_name: string,
    id: number,
    avatar_url: string,
    repo_name: string,
    theme_id: string,
    size?: number
}

const RecentRepoCard = ({author_name, avatar_url, repo_name}: Props) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer`}>
    <Avatar className="w-full" image={avatar_url} />
    <div className="p-5">
      <h1 className="text-2xl font-bold">{repo_name}</h1>
      <p className="mt-2 text-lg font-semibold text-gray-600">by {author_name}</p>
    </div>
  </div>
  )
}

export default RecentRepoCard;