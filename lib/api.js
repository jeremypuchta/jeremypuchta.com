import { createClient } from "contentful"

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function parsePost({ fields }) {
  return {
    content: fields.content,
    date: fields.date,
    slug: fields.slug,
    title: fields.title
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getAllPosts() {
  const entries = await client.getEntries()
  return parsePostEntries(entries)
}

export async function getAllPostIds() {
  const entries = await client.getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })
  return parsePostEntries(entries, (post) => post.fields)
}

export async function getPostData(id) {
  const entry = await client.getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': id,
  })

  return {
    post: parsePostEntries(entry)[0]
  }
}