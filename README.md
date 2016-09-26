## Cubbles <federal-state-elections> demo

<hr/>

This is a small Cubbles demo showing the creation of a compound Cubble using existing Cubbles. In directory  `webpackages/com.incowia.demo.elections` you can find compound component `federal-state-elections` and it's corresponding `manifest.webpackage`.

Basically the `federal-state-elections` Cubble has the following structure:

```
      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
     |                                <federal-state-elections>                          |
     |      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _         _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _    |
     |     |   request-election-results      |       |          results-bar-chart    |   |
     |     |        <ajax-request>    status O       O xLabels     <bar-chart>       |   |
 url O---->O config                          |       |                               |   |
     |     |                          result O-----> O dataColumns                   |   |
     |     |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|       |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|   |
     |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|

```

Wan't to get to know more about Cubbles Platform? Visit[cubbles.github.io](www.cubbles.github.io)
