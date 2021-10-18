import type { JsonObject } from 'type-fest'

export type { JsonObject }

export type User = {
  id: string
  anonymousId: string
  data: JsonObject
  meta: JsonObject
  createdAt: string
  updatedAt: string
}

export type UserResponse = {
  user: User
}

export type Event = {
  id: number
  userId: string
  name: string
  data: JsonObject
  meta: JsonObject
  createdAt: string
}

export type EventResponse = {
  event: Event
}

export type View = {
  id: number
  userId: string
  name: string
  data: JsonObject
  meta: JsonObject
  createdAt: string
}

export type ViewResponse = {
  view: View
}
