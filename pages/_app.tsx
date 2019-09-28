import React from "react"
import { Provider } from "react-redux"
import App, { AppContext } from "next/app"
import withRedux from "next-redux-wrapper"
import { initStore, ReduxStoreInstance } from "../store"

type PropsWithStore = {
  store: ReduxStoreInstance
}

export default withRedux(initStore)(
  class extends App<PropsWithStore> {
    static async getInitialProps({ Component, ctx }: AppContext) {
      let pageProps = {}
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps}
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)
