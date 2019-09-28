import React from "react"
import Head from "next/head"
import Component from "../components/index";

type Props = {
  title: string
}

class App extends React.Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { title: "Hello world" }
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Component />
      </>
    )
  }
}

export default App
