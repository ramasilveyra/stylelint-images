# prefer-data-uri

Suggest using data-URIs instead of an external image if their file size (in bytes) exceeds the limit.

## Options

`number`: Maximum file size (in bytes) allowed as external image.

For example, with `3000`:

The following patterns are considered warnings:

```css
.header {
  background-image: url('https://ramasilveyra.github.io/stylelint-images/media/image-2.png'); /* 2739 bytes of size */
}
```

```css
.header {
  background: url('https://ramasilveyra.github.io/stylelint-images/media/image-2.png'); /* 2739 bytes of size */
}
```

```css
.header {
  content: url('https://ramasilveyra.github.io/stylelint-images/media/image-2.png'); /* 2739 bytes of size */
}
```

The following patterns are not considered warnings:

```css
.header {
  background-image: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png'); /* 6486 bytes of size */
}
```

```css
.header {
  background: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png'); /* 6486 bytes of size */
}
```

```css
.header {
  content: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png'); /* 6486 bytes of size */
}
```
