# broken

Checks if the images are broken.

## Options

### `true`

The following patterns are considered warnings:

```css
.header {
  background-image: url('https://site.com/this-image-doesnt-exist.svg');
}
```

```css
.header {
  background: url('https://site.com/this-image-doesnt-exist.svg');
}
```

```css
.header {
  content: url('https://site.com/this-image-doesnt-exist.svg');
}
```

The following patterns are not considered warnings:

```css
.header {
  background-image: url('https://site.com/this-image-exist.svg');
}
```

```css
.header {
  background: url('https://site.com/this-image-exist.svg');
}
```

```css
.header {
  content: url('https://site.com/this-image-exist.svg');
}
```
