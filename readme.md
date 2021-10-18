![Pickle](https://pickle.sh/pickle@2x.png)

# Pickle JS

Official [Pickle](https://pickle.sh) library for JavaScript.

## Quickstart

### Install

```
yarn add @pickle/js
```

### Basic usage

You can now import and use Pickle.

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

## API

### `new Pickle(key)`

| Parameter | Type   | Required | Description    |
| --------- | ------ | -------- | -------------- |
| key       | string | Yes      | Pickle app key |

### `pickle.identify(id, data?, meta?)`

| Parameter | Default value | Type   | Required | Description |
| --------- | ------------- | ------ | -------- | ----------- |
| id        |               | string | Yes      | User id     |
| data      | `{}`          | object | No       | Properties  |
| meta      | `{}`          | object | No       | Meta        |

User properties will merge with and override existing properties.

### `pickle.event(name, data?, meta?)`

| Parameter | Default value | Type   | Required | Description |
| --------- | ------------- | ------ | -------- | ----------- |
| name      |               | string | Yes      | Event name  |
| data      | `{}`          | object | No       | Properties  |
| meta      | `{}`          | object | No       | Meta        |

### `pickle.view(name, data?, meta?)`

| Parameter | Default value | Type   | Required | Description |
| --------- | ------------- | ------ | -------- | ----------- |
| name      |               | string | Yes      | View name   |
| data      | `{}`          | object | No       | Properties  |
| meta      | `{}`          | object | No       | Meta        |

## Changelog

### 0.0.1

- Initial release
