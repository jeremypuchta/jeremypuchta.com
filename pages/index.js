import { useEffect, useState } from "react";
import Head from "next/head";
import { createClient } from "contentful"

import Layout from "../components/layout";


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export default function IndexPage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Jeremy Puchta</title>
      </Head>
      <section className="mb-8">
        <h1 className="text-4xl font-bold">Hey, I'm Jerry! 🐊</h1>
        <br />
        <p className="text-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Articles</h2>
        {posts.length > 0 ? posts.map(post => (
          <Post
            alt={p.fields.alt}
            date={p.fields.date}
            key={p.fields.title}
            image={p.fields.image}
            title={p.fields.title}
            url={p.fields.url}
          />
        )) : null}
      </section>
    </Layout>
  )
}