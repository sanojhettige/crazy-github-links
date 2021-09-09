import { PropsWithChildren } from 'react'
import Avatar from '../Avatar';

interface Props {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    type: string,
}

const ContributorCard = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex w-full">
    <div className="w-full p-1">
        <a href="/">
          <Avatar rounded image={props.avatar_url} alt={props.login} title={props.login} />
        </a>
    </div>
    </div>
  )
}

export default ContributorCard;