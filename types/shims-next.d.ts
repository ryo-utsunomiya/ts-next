import { NextPageContext } from "next"
import { ReduxStoreInstance } from "../store"

declare module "next" {
  interface NextPageContext {
    store: ReduxStoreInstance
  }
}
