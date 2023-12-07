import type { InferGetStaticPropsType,GetStaticProps } from "next";
import { detectContentType } from "next/dist/server/image-optimizer";

type file ={
    content: string
}
export const getStaticProps = (async (context)=>{
    const req = await fetch("./error.txt")
    const res = await req.text()
    return{props:{res}}
}) satisfies GetStaticProps<{
    res:file
}>

export default function Page({
    res,
}: InferGetStaticPropsType<typeof getStaticProps>){
    return res.content
}