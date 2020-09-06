import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <section className="mb-8">
        <h1 className="text-4xl font-bold">Hey, I'm Jerry! 🐊</h1>
        <br />
        <p className="text-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Articles</h2>
        <article>Here is an article...</article>
        <article>...and here's another one</article>
      </section>
    </Layout>
  )
}