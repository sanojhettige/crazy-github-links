import type { NextPage } from 'next';
import Router, { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { RepoCard } from '../../components/uielements/card';
import { getRepoById, getRepository, getContributors, updateRepo, startRepository } from '../../services/github';

const RepoView: NextPage = () => {
  const router = useRouter()
  const { repoId } = router.query

  const [color, setColor] = useState('primary');
  const [icon, setIcon] = useState('start');
  const [repo, setRepo] = useState(null);

  // get repository detils with theme
  const getRepoDetails = async() => {
    const repoData = await getRepoById(repoId);
    
    if (repoData.data) {
      const { data: { author_name, repo_name, theme_id, icon_id }} = repoData;
      const data = await getRepository(author_name, repo_name);
      const contributors = await getContributors(author_name, repo_name);
      if (data.owner) {
        data.crazydata = { author_name, repo_name, theme_id, icon_id };
        data.contributors = contributors;
        setRepo(data);
        setColor(theme_id);
        setIcon(icon_id);
      }
    }
  }

  // check for star the repo if authenticated redirect to orginal url
  const handleOnStarRepository = async() => {
    const { crazydata: { author_name, repo_name }} = repo;
    const data = await startRepository(author_name, repo_name);

    if (data?.message === 'Requires authentication') {
      toast(data.message || 'Not authorized!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'error'
      });
      window.open(`https://github.com/${author_name}/${repo_name}`, "_blank");
    } 
  }

  useEffect(() => {
    getRepoDetails();
  }, [repoId])

  return (
    <Layout title="Home | Github Crazy Links">
        <div className="bg-white-500 p-2 content-center items-center justify-center">
        <RepoCard type={color} icon={icon} data={repo} showLogo showContributors showStartButton handleOnStarRepository={handleOnStarRepository} />
        </div>
    </Layout>
  )
}

export default RepoView
