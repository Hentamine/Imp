# Imp
Imp is a cli tool to manipulate images for web consumption.

## Getting Started

```
npm i @hentamine/imp
```

## Using Imp

To use Imp, navigate to the directory that contains images you want to manipulate.

```
cd ./<imageDir>
```

Imp will manipulate all images (jpg/png) within the current working directory.

It takes three parameters:
- --width &lt;n&gt;
- --height &lt;n&gt;
- --quality &lt;1-100&gt;

```
imp --width 256 --height 256 --quality 100
```

Imp will create a new directory of all the converted images named "&lt;width&gt;x&lt;height&gt;-&lt;quality&gt;".
All converted files will have the same name and format inside the new directory.