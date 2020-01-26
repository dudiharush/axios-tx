import axios, { AxiosRequestConfig, AxiosStatic, Canceler } from 'axios'

export interface AxiosStaticTx extends AxiosStatic {
  cancel(message?: string): void
}

export function axiosTx(config?: AxiosRequestConfig): AxiosStaticTx {
  let cancel: Canceler
  const cancelToken = new axios.CancelToken(c => {
    cancel = c
  })
  const instance = axios.create({
    ...config,
    cancelToken,
  }) as AxiosStaticTx

  instance.cancel = (message?: string) => {
    cancel(message)
    instance.defaults.cancelToken = new axios.CancelToken(c => {
      cancel = c
    })
  }

  return instance
}
