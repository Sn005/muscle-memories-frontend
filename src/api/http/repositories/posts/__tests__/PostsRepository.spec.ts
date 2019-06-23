import PostsRepository from '../PostsRepository'
import PostsModelInterface from '../PostsModelInterface'
import HttpAdapter from '../../../adapters/HttpAdapter'
const mockPosts = [...Array(5)].map((v, i) => {
  const post: PostsModelInterface = {
    id: i + 1,
    name: 'string',
    title: 'string',
    context: 'string'
  }
  return post
})
describe('PostsRepositoryのテスト', () => {
  const postsRepository = new PostsRepository(HttpAdapter)
  it(`allメソッドのテスト`, async () => {
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockPosts)
    const result = await postsRepository.all()
    expect(result).toEqual(mockPosts)
  })
  it(`whereメソッドのテスト`, async () => {
    const mockQuery = { id: 5 }
    const mockResult = mockPosts.filter(v => v.id === 5)
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockResult)
    const result = await postsRepository.where(mockQuery)
    expect(result).toEqual(mockResult)
  })
  it(`getメソッドのテスト`, async () => {
    const mockResult = mockPosts.filter(v => v.id === 1)
    HttpAdapter.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => mockResult)
    const result = await postsRepository.get(1)
    expect(result).toEqual(mockResult[0])
  })
  it(`updateメソッドのテスト`, async () => {
    const mockResult: PostsModelInterface = {
      ...mockPosts.filter(v => v.id === 1)[0],
      name: 'new',
      title: 'new',
      context: 'new'
    }
    HttpAdapter.prototype.put = jest.fn().mockImplementation(() => [mockResult])
    const result = await postsRepository.update(1, mockResult)
    expect(result).toEqual(mockResult)
  })
  it(`deleteメソッドのテスト`, async () => {
    HttpAdapter.prototype.delete = jest.fn().mockImplementation(() => true)
    const result = await postsRepository.delete(1)
    expect(result).toBeTruthy()
  })
})
