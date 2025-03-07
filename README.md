<div align="center">
  <img src="https://raw.gabrielecanepa.com/raw.svg" width="200">
  <hr>
  <a href="https://github.com/gabrielecanepa/raw/actions/workflows/optimize-images.yml">
    <img src="https://github.com/gabrielecanepa/raw/actions/workflows/optimize-images.yml/badge.svg">
  </a>
</div>
<br>

Versioned static resources delivered at `raw.gabrielecanepa.com` via [Cloudflare Workers](https://workers.cloudflare.com).

## Usage

Use this URL pattern to link a resource in the [`lib`](./lib) directory:

```sh
https://raw.gabrielecanepa.com/{filename}
```

### Branching and versioning

To target a specific branch, append the `b` query parameter follow by the branch name:

```sh
https://raw.gabrielecanepa.com/{filename}?b={branch}
```

To link a specific version, append the `v` query parameter with a version or commit hash:

```sh
https://raw.gabrielecanepa.com/{filename}?v={version|commit_hash}
```

If a parameter is invalid, the latest version will be used.

### Examples

Using the asset `avatar-notion.png`.

- Latest version<br>
  https://raw.gabrielecanepa.com/avatar-notion.png
  <div><img width="60" src="https://raw.gabrielecanepa.com/avatar-notion.png"></div>

- Branch [`colorize`](https://github.com/gabrielecanepa/raw/tree/colorize)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?b=colorize<br>
  <div><img width="60" src="https://raw.gabrielecanepa.com/avatar-notion.png?b=colorize&"></div>

- Commit [`e9546a2`](https://github.com/gabrielecanepa/raw/commit/e9546a2)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=e9546a2<br>
  <div><img width="60" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=e9546a2"></div>

- Version [`v1.0.1`](https://github.com/gabrielecanepa/raw/releases/tag/v1.0.1)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=1.0.1<br>
  <div><img width="60" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=1.0.1"></div>

- Wrong parameter fallback<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=wrong<br>
  <div><img width="60" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=wrong"></div>

## Development

### Worker

To set up the worker, switch to the `worker` directory and install the dependencies:

```sh
cd worker
pnpm install
```

Change the variables in [`wrangler.jsonc`](./worker/wrangler.jsoc) and run the worker locally:

```sh
pnpm run dev
```

Deploy by pushing to `main` or manually:

```sh
pnpm run deploy
```

### Image optimization

Image assets are optimized automatically using [this workflow](./.github/workflows/optimize-images.yml). The action also creates a WebP version of new images.

### Releases

To create a release, push a new tag following these conventions:

- Major `v1` - new collection of assets
- Minor `v1.2` - new or updated assets
- Patch `v1.2.3` - minor updates to existing resources

For example, to release `v1.0.1`:

```sh
git tag -a v1.0.1 -m "chore: release v1.0.1"
git push origin v1.0.1
```

A GitHub release will be created automatically using [this workflow](./.github/workflows/release.yml).

## License

All files are public domain [unless otherwise specified](LICENSE).
