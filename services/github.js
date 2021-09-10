
import { API } from 'aws-amplify';
import api from './api';
const apiPrefix = 'reposApi';

const returnApiResponse = async(response) => {
    const json = await response;
    if (!json) {
      console.error(json.errors)
      throw new Error('API failed.')
    }
  
    return json;
}

export const getRepository =  async(username, repoName) => {
    return await api({ url: `/repos/${username}/${repoName}`});
}

export const getContributors = async(username, repoName) => {
    return await api({ url: `/repos/${username}/${repoName}/contributors`});
}

export const startRepository = async(username, repoName) => {
    return await api({ method: 'PUT', url: `/user/starred/${username}/${repoName}`});
}

export const getRecentRepos = async() => {
    const res = await API.get(apiPrefix, '/repos');
    return await returnApiResponse(res);
}

export const createRepo = async({theme_id, icon_id, repo_name, author_name, avatar_url}) => {
    const res = API.post(apiPrefix, '/repos', {
        body: {
          theme_id: theme_id,
          icon_id: icon_id,
          repo_name,
          author_name,
          avatar_url
        }
      });
    return await returnApiResponse(res);
}

export const getRepoById = async(id) => {
    const res = API.get(apiPrefix, `/repos/${id}`, {});
    return await returnApiResponse(res);
}

export const updateRepo = async({id, theme_id, icon_id}) => {
    const res = API.put(apiPrefix, `/repos/${id}`, { 
        body: {
          id,
          theme_id,
          icon_id
        }
      });
    return await returnApiResponse(res);
}