import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
   
  type File = {
    Content : string
  }
   
  export const getStaticPaths = (async () => {
    return {
      paths: [
        {
          params: {
            name: 'error.txt',
          },
        },
      ],
      fallback: true,
    }
  }) satisfies GetStaticPaths
   
  export const getStaticProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/stylo-codes-stuff/Mr-bens-merch-store-website/contents/src/app/fallback/fallback.txt')
    const repo = await res.json()
    return { props: { repo } }
  }) satisfies GetStaticProps<{
    repo: File
  }>
  export default function Page({
    repo,
  }:InferGetStaticPropsType<typeof getStaticProps>){
    return repo.content
  }

