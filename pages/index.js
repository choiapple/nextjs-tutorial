import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from "axios";
import ItemList from '../src/component/ItemList';
import {Header, Divider, Loader} from "semantic-ui-react";

export default function Home({list}) {
  // const API_URL=process.env.NEXT_PUBLIC_API_URL; // 브라우저 환경이라서
  return (
  <div>
    <Head>
      <title>Home | 코딩망마</title>
      <meta name="description" content="도완득 홈입니다."></meta>
    </Head>
      <>
        <Header as="h3" style={{paddingTop:40}}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)}/>
        <Header as="h3" style={{paddingTop:40}}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)}/>
      </>
  </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props:{
      list:data,
      name: process.env.name,
    },
  };
}
// 미리 만들어진 static html을 제공하는거임
