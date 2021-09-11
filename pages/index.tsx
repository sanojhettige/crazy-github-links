import Router from "next/router";
import { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/layout';
import { getRepository, getContributors, createRepo } from '../services/github';
import TextField from "../components/uielements/inputs/textField";
import Button from "../components/uielements/button";
import Loader from "../components/uielements/Loader";

export default function HomePage() {
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  // update username state
  const onChangeUsername = e => {
    const { target: { value } } = e;
    setUsername(value);
  }

  // update repo name state
  const onChangeRepoName = e => {
    const { target: { value } } = e;
    setRepoName(value);
  }

  const validateFields = () => {
    if (!username || !repoName) {
      toast('Enter github username and repositoy name!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error'
        });
      return false;
    }
  }

  // fetch data from git api
  const getRepositoryData = async () => {
    const defaultTheme = 'primary';
    const defaultIcon = 'star';
    validateFields();
    if (!isFetching && username && repoName) {
      setIsFetching(true);
      const promiseData = await Promise.all([getRepository(username, repoName), await getContributors(username, repoName)]);

      const data = promiseData[0] || {};
      const contributors = promiseData[1] || [];

      if (data.owner) {
        data.contributors = contributors;
        const resp = await createRepo({
          theme_id: defaultTheme,
          icon_id: defaultIcon,
          repo_name: repoName,
          author_name: username,
          avatar_url: data.owner?.avatar_url || '',
        });
        if (resp?.id) {

          data.crazylink = { id: resp.id, theme_id: defaultTheme, icon_id: defaultIcon };
          window.localStorage.setItem('repo', JSON.stringify(data));
          Router.push(`/repo/generate/${resp.id}`); 
          setIsFetching(false);
        }
        
      } else {
        toast(data.message || 'Repository not found!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
          });
          setIsFetching(false);
      }
    }
  }

  return (
    <Layout title="Home | Github Crazy Links">
      <Loader>
<div className="relative pt-16 pb-32 flex content-center bg-primary-500 items-center justify-center"
  style={{
    minHeight: "80vh"
  }}>
  <div className="container top-0 relative mx-auto">
    <div className="items-start flex flex-wrap">
      <div className="w-full lg:w-7/12 px-4 mr-auto text-left">
        <div className="pr-12">
          <h1 className="text-white-50 font-semibold text-3xl">
            Create amazling sharable links to your Github repositories
              </h1>
          <p className="mt-4 text-lg text-gray-300">
            some content here
          </p>
        </div>
      </div>
      <div className="w-full lg:w-5/12 px-4 mr-auto text-left">
        <div className="pr-12">
        <div className="md:flex md:items-center mb-6">
    <div className="w-full">
    <TextField placeholder="username" onChange={onChangeUsername} value={username}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-full">
      <TextField placeholder="repository name" onChange={onChangeRepoName} value={repoName}/>
    </div>
  </div>

  <div className="md:flex md:items-center">
    <div className="w-full">
      <Button disabled={isFetching} isLoading={isFetching} onClick={getRepositoryData} type="secondary" fullwith={true}>Find Repo</Button>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Loader>
  </Layout>
  );
}
