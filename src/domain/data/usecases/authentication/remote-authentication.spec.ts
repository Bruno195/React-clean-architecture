import { HttpPostClient } from '../../protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'
describe('RemoteAuthentication ', () => {
  test('should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      // captura valores para comparar e também coloca valores fakes
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
// remote will make req http, url and datas
// system under test, object that we test da vez
