import type { NextPage } from 'next';
import Router, { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import Layout from '../../../components/layout';
import { RepoCard } from '../../../components/uielements/card';
import Button from '../../../components/uielements/button';
import Dropdown from '../../../components/uielements/Dropdown';
import Iconography from '../../../components/uielements/Iconography';
import { getRepoById, getRepository, getContributors, updateRepo } from '../../../services/github';
import TextField from '../../../components/uielements/inputs/textField';

const Repo: NextPage = () => {
  const router = useRouter()
  const { repoId } = router.query

  const [color, setColor] = useState('primary');
  const [icon, setIcon] = useState('start');
  const [repo, setRepo] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);
  const [repoUrl, setRepoUrl] = useState('');

  // set color state
  const onColorChange = value => setColor(value);

  // set icon state
  const onIconChange = value => setIcon(value);

  // get repo details if not available in localstorage
  const getRepoDetails = async() => {
    const repoData = await getRepoById(repoId);
    if (repoData.data) {
      const { data: { author_name, repo_name, theme_id, icon_id }} = repoData;
      const data = await getRepository(author_name, repo_name);
      const contributors = await getContributors(author_name, repo_name);
      if (data.owner) {
        data.contributors = contributors;
        const crazydata = { id: repoData.id, theme_id: theme_id, icon_id: icon_id };
        updateLocalStorageTheme(data, crazydata);
        location.reload();
      }
    }
  }

  function getLocationOrigin () {
    const { protocol, hostname, port } = window.location
    return `${protocol}//${hostname}${port ? ':' + port : ''}`
  }

  const generateRepoLink = async() => {
    const resp = await updateRepo({
      id: repoId,
      theme_id: color,
      icon_id: icon,
    });
    const repoValue = window.localStorage.getItem('repo');
    const repoObj = JSON.parse(repoValue);

    updateLocalStorageTheme(repoObj, resp.data);
    setIsGenerated(true);
    console.log({router});
    setRepoUrl(`${getLocationOrigin()}/repo/${repoId}`);
  }

  const updateLocalStorageTheme = (repoObj, crazydata) => {
    repoObj.crazylink = crazydata;
    window.localStorage.setItem('repo', JSON.stringify(repoObj));
  }

  const onCopyToClipBoard = e => {
    
  };

  useEffect(() => {
    const repoValue = window.localStorage.getItem('repo');
    if (repoValue !== null) {
      const repoObj = JSON.parse(repoValue);
      setRepo(repoObj);
      setColor(repoObj.crazylink.theme_id);
      setIcon(repoObj.crazylink.icon_id)
    } else if(repoId) {
      getRepoDetails();
    }

  }, [repoId])

  return (
    <Layout title="Home | Github Crazy Links">
      <div className="relative pt-2 pb-2 content-center items-center justify-center">
        <div className="flex justify-center">
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <div className="relative">
              <Dropdown size="medium" id="color-selector" value={color} onChange={onColorChange} options={[
                { id: 'primary', title: 'BIG STONE'},
                { id: 'secondary', title: 'CORNFLOWER BLUE'},
                { id: 'github', title: 'WOODSMOKE'},
                { id: 'slate-gray', title: 'SLATE GRAY'},
                { id: 'shark', title: 'SHARK'},
                { id: 'sunset-orange', title: 'SUNSET ORANGE'},
                { id: 'bubbles', title: 'BUBBLES'}
                
              ]} />
            </div>
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
          <div className="relative">
          <Dropdown size="medium" id="icon-selector" value={icon} onChange={onIconChange} options={[
                { id: 'star', title: <Iconography icon="start" />},
                { id: 'heart', title: <Iconography icon="heart" />},
                { id: 'eye', title: <Iconography icon="eye" />}
              ]} />
              </div>
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
          <Button type="white" size="medium" onClick={generateRepoLink}>
            Generate Link
            </Button>
            </div>
        </div>
        </div>
        {isGenerated && (
        <div className="relative pt-2 pb-2 content-center items-center justify-center">
        <div className="flex justify-center">
        <div className="animate-bounce w-2/3 flex justify-center rounded-lg text-lg mb-4" role="group">
          <TextField className="rounded-r-none pointer-events-none" value={repoUrl} onChange={() => {}} fullwith />
          <Button onClick={onCopyToClipBoard} className="rounded-l-none" size="medium" variant="outlined" type="white"> Copy </Button>
          </div>
        </div>
        </div>
        )}
        <div className="bg-white-500 p-2 content-center items-center justify-center">
        <RepoCard type={color} icon={icon} data={repo} showLogo showContributors showStartButton />
        </div>
    </Layout>
  )
}

export default Repo
