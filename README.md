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
  https://raw.gabrielecanepa.com/avatar-notion.png<br>
  <img style="width: 60px; margin-top: 12px" src="https://raw.gabrielecanepa.com/avatar-notion.png">

- Version [`v1`](https://github.com/gabrielecanepa/raw/releases/tag/v1)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=1<br>
  <img style="width: 60px; margin-top: 12px" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=1">

- Commit [`b3b3b3b`](https://github.com/gabrielecanepa/raw/commit/b3b3b3b)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=b3b3b3<br>
  <img style="width: 60px; margin-top: 12px" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=b3b3b3b">

- Branch [`colorize`]()<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?b=colorize<br>
  <img style="width: 60px; margin-top: 12px" src="https://raw.gabrielecanepa.com/avatar-notion.png?b=colorize">

- Wrong parameter falling back to latest<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=wrong<br>
  <img style="width: 60px; margin-top: 12px" src="https://raw.gabrielecanepa.com/avatar-notion.png?v=wrong">

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

Image assets are optimized automatically using [this workflow](https://github.com/gabrielecanepa/raw/actions/workflows/optimize-images.yml). The action also creates a WebP version of new images.

### Releases

To create a release, push a new tag with the following format:

```sh
git tag -a v2 -m "chore: release v2"
git push origin v2
```

Create a release on GitHub and upload the new files.

## License

All files are public domain [unless otherwise specified](LICENSE).
