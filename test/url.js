import Url from '../src/utils/url'

const route = pattern => new Url('GET', pattern).regExp

describe('url', () => {
  it('regexp', () => {
    assert.strictEqual(route('/').test('/'), true)
    assert.strictEqual(route('/').test('/f'), false)
    assert.strictEqual(route('/foo').test('/foo'), true)
    assert.strictEqual(route('/foo').test('/f00'), false)
    assert.strictEqual(route('/foo').test('/foo1'), false)
    assert.strictEqual(route('/foo').test('/foo?bar=baz'), true)
    assert.strictEqual(route('/foo').test('/foo?bar=baz/foo=baz'), true)
    assert.strictEqual(route('/foo/{fooId}/bar/{barId}').test('/foo/1/bar/2'), true)
    assert.strictEqual(route('/foo/{fooId}/bar/{barId}').test('/foo/1/bar/2/baz'), false)
    assert.strictEqual(route('/foo/{fooId}/bar/{barId}').test('/foo/bar/2'), false)
    assert.strictEqual(route('/foo/{fooId}').test('/foo/1/bar'), false)
    assert.strictEqual(route('/user/{fooId}').test('/user/1'), true)
    assert.strictEqual(route('/user/{fooId}').test('/user1'), false)
    assert.strictEqual(route('/user/{fooId}').test('/user1/'), false)
    assert.strictEqual(route('/{fooId}').test('/bar'), true)
    assert.strictEqual(route('/{fooId}').test('/bar/baz'), false)
  })
})