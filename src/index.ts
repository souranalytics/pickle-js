import bent from 'bent'
import cuid from 'cuid'

import {
  Event,
  EventResponse,
  JsonObject,
  User,
  UserResponse,
  View,
  ViewResponse
} from './types'

export class Pickle {
  private key: string

  private client = bent('https://pickle.sh/api', 'POST', 'json')

  private anonymousId = cuid()
  private userId?: string

  constructor(key: string) {
    if (!key) {
      throw new Error('API key required')
    }

    this.key = key
  }

  async identify(
    id?: string,
    data: JsonObject = {},
    meta: JsonObject = {}
  ): Promise<User> {
    if (id) {
      this.userId = id
    } else {
      this.userId = this.anonymousId
    }

    const { user } = await this.request<UserResponse>('/identify', {
      anonymousId: this.anonymousId,
      data,
      id: this.userId,
      meta
    })

    return user
  }

  async event(
    name: string,
    data: JsonObject = {},
    meta: JsonObject = {}
  ): Promise<Event> {
    const { event } = await this.request<EventResponse>('/events', {
      data,
      meta,
      name,
      userId: this.userId ?? this.anonymousId
    })

    return event
  }

  async view(
    name: string,
    data: JsonObject = {},
    meta: JsonObject = {}
  ): Promise<View> {
    const { view } = await this.request<ViewResponse>('/views', {
      data,
      meta,
      name,
      userId: this.userId ?? this.anonymousId
    })

    return view
  }

  private async request<T>(url: string, data: JsonObject): Promise<T> {
    const response = await this.client(url, data, {
      'x-pickle-key': this.key
    })

    return response as T
  }
}
