<img alt="Pickle" src="https://pickle.sh/pickle@2x.png" height="200" width="160" />

# @pickle/js

Official [Pickle](https://pickle.sh) library for JavaScript.

## Quickstart

### Install

#### Yarn

```
yarn add @pickle/js
```

#### NPM

```
npm install @pickle/js
```

### Basic usage

```typescript
import { Pickle } from '@pickle/js'

const pickle = new Pickle('YOUR_API_KEY')

await pickle.identify('101', {
  planet: 'Earth'
})

await pickle.event('sign_in', {
  source: 'web'
})

await pickle.view('Sign in', {
  source: 'web'
})
```

## Docs

### Init

```typescript
const pickle = new Pickle('YOUR_API_KEY')
```

| Parameter | Type     | Required | Description    |
| --------- | -------- | -------- | -------------- |
| key       | `string` | Yes      | Pickle app key |

### Identifying users

```typescript
pickle.identify(id, data?, meta?)
```

| Parameter | Default value | Type     | Required | Description |
| --------- | ------------- | -------- | -------- | ----------- |
| id        | -             | `string` | Yes      | User id     |
| data      | `{}`          | `Json`   | No       | Properties  |
| meta      | `{}`          | `Json`   | No       | Meta        |

### Sending events

```typescript
pickle.event(name, data?, meta?)
```

| Parameter | Default value | Type     | Required | Description |
| --------- | ------------- | -------- | -------- | ----------- |
| name      | -             | `string` | Yes      | Event name  |
| data      | `{}`          | `Json`   | No       | Properties  |
| meta      | `{}`          | `Json`   | No       | Meta        |

### Recording views

```typescript
pickle.view(name, data?, meta?)
```

| Parameter | Default value | Type     | Required | Description |
| --------- | ------------- | -------- | -------- | ----------- |
| name      | -             | `string` | Yes      | View name   |
| data      | `{}`          | `Json`   | No       | Properties  |
| meta      | `{}`          | `Json`   | No       | Meta        |

## Changelog

### 0.0.1

- Initial release
