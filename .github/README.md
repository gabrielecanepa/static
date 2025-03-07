<div align="center">
  <img src="https://raw.gabrielecanepa.com/raw.svg" width="200">
  <h1></h1>
  <a href="https://github.com/gabrielecanepa/raw/actions/workflows/optimize-images.yml">
    <img src="https://github.com/gabrielecanepa/raw/actions/workflows/optimize-images.yml/badge.svg">
  </a>
</div>
<br>

Static resources delivered at [`raw.gabrielecanepa.com`](https://cdn.gabrielecanepa.com).

## Usage

Use this URL pattern to link to a resource in this repository:

```sh
https://raw.gabrielecanepa.com/{filename}
```

To link to a specific version, identified by a tag or commit hash, append the `v` parameter to the URL: 

```sh
https://raw.gabrielecanepa.com/{filename}?v={tag|commit}
```

If not found, the resource will be served from the `main` branch.

### Examples

- Current version<br>
  https://raw.gabrielecanepa.com/avatar-notion.png
  ![](https://raw.gabrielecanepa.com/avatar-notion.png)
- Version at tag [`v1.0.0`](https://github.com/gabrielecanepa/raw/releases/tag/v1.0.0)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=1.0.0
  ![](https://raw.gabrielecanepa.com/avatar-notion.png?v=1.0.0)
- Version at commit [`b3b3b3b`](https://github.com/gabrielecanepa/raw/commit/b3b3b3b)<br>
  https://raw.gabrielecanepa.com/avatar-notion.png?v=b3b3b3b
  ![](https://raw.gabrielecanepa.com/avatar-notion.png?v=b3b3b3b)
