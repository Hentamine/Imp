# Imp
Imp is a cli tool to manipulate images for web consumption.

## Getting Started

```
npm i -g @hentamine/imp
```

## Using Imp

Navigate to the directory that contains images you want to manipulate.

```
cd ./<imageDir>
```

Imp will manipulate all images (jpg/png) within the current working directory.

It takes three parameters:
- `--width <n>`
- `--height <n>`
- `--quality <1-100>`

```
imp --width 256 --height 256 --quality 100
```

Imp will create a new directory inside of the current directory of all the converted images named 
` "<width>x<height>-<quality>"`.

All converted files will have the same name and format inside the new directory.