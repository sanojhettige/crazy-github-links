import Router from "next/router";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/layout';
import { getRepository, getContributors, getRecentRepos, createRepo } from '../services/github';
import TextField from "../components/uielements/inputs/textField";
import Button from "../components/uielements/button";
import { RecentRepoCard } from '../components/uielements/card';


export default function AboutPage() {

  return (
    <Layout title="Home | About Github Crazy Links">

<div className="relative pt-16 pb-32 flex content-center bg-white items-center justify-center"
  style={{
    minHeight: "80vh"
  }}>
  Hello All Gitties
</div>
   
  </Layout>
  );
}
