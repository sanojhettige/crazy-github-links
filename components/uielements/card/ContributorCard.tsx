import { PropsWithChildren } from 'react'
import Avatar from '../Avatar';
import ToolTip from '../ToolTip'

interface Props {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    type: string,
}

const ContributorCard = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex w-full p-1">
        <a href="#" data-tip={props.login}>
          <Avatar rounded image={props.avatar_url} alt={props.login} />
        </a>
        <ToolTip />
    </div>
  )
}

export default ContributorCard;
export {}