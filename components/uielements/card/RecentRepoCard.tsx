import { PropsWithChildren } from 'react'
import Avatar from '../Avatar';

interface Props {
    author_name: string,
    id: number,
    avatar_url: string,
    repo_name: string,
    theme_id: string,
}

const RecentRepoCard = (props: PropsWithChildren<Props>) => {
  return (
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">{props.author_name}</h3>
      <div className="relative">
          <Avatar className="w-full" image={props.avatar_url} />
      </div>
      <h1 className="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">{props.repo_name}</h1>
      <div className="my-4">
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Watch Repo</button>
      </div>
    </div>
    </div>
  )
}

export default RecentRepoCard;