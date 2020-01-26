import axios, { AxiosRequestConfig, AxiosStatic } from 'axios'
const CancelToken = axios.CancelToken

export interface AxiosStaticTx extends AxiosStatic {
  cancel(message?: string): void
}

export function axiosTx(config?: AxiosRequestConfig): AxiosStaticTx {
  let source = CancelToken.source()
  const instance = axios.create({
    ...config,
    cancelToken: source.token,
  }) as AxiosStaticTx

  instance.cancel = (message?: string) => {
    source.cancel(message)
    source = CancelToken.source()
  }

  return instance
}
