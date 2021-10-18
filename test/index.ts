import ava, { TestInterface } from 'ava'
import { setupTests } from 'ava-nock'

import { Pickle } from '../src'

const test = ava as TestInterface<{
  key: string

  eventName: string
  userId: string
  viewName: string
}>

setupTests()

test.before(t => {
  t.context.key = 'foo'

  t.context.eventName = 'sign_in'
  t.context.userId = '101'
  t.context.viewName = 'Sign in'
})

test('init', t => {
  const pickle = new Pickle(t.context.key)

  t.truthy(pickle)
})

test('init without key', t => {
  t.throws(() => new Pickle(''))
})

test('identify', async t => {
  const { userId } = t.context

  const pickle = new Pickle(t.context.key)

  const user = await pickle.identify(userId)

  t.is(user.id, userId)
})

test('identify without user id', async t => {
  const pickle = new Pickle(t.context.key)

  const user = await pickle.identify()

  t.is(user.id, user.anonymousId)
})

test('event', async t => {
  const { eventName } = t.context

  const pickle = new Pickle(t.context.key)

  const event = await pickle.event(eventName)

  t.is(event.name, eventName)
})

test('event with user id', async t => {
  const { eventName, userId } = t.context

  const pickle = new Pickle(t.context.key)

  const user = await pickle.identify(userId)

  t.is(user.id, userId)

  const event = await pickle.event(eventName)

  t.is(event.name, eventName)
})

test('view', async t => {
  const { viewName } = t.context

  const pickle = new Pickle(t.context.key)

  const view = await pickle.view(viewName)

  t.is(view.name, viewName)
})

test('view with user id', async t => {
  const { userId, viewName } = t.context

  const pickle = new Pickle(t.context.key)

  const user = await pickle.identify(userId)

  t.is(user.id, userId)

  const view = await pickle.view(viewName)

  t.is(view.name, viewName)
})
