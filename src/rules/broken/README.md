# broken

Checks if the images are broken.

## Options

### `true`

The following patterns are considered warnings:

```css
.header {
  background-image: url('https://ramasilveyra.github.io/stylelint-images/media/doesn-exist.png');
}
```

```css
.header {
  background: url('https://ramasilveyra.github.io/stylelint-images/media/doesn-exist.png');
}
```

```css
.header {
  content: url('https://ramasilveyra.github.io/stylelint-images/media/doesn-exist.png');
}
```

The following patterns are not considered warnings:

```css
.header {
  background-image: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png');
}
```

```css
.header {
  background: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png');
}
```

```css
.header {
  content: url('https://ramasilveyra.github.io/stylelint-images/media/image-1.png');
}
```
