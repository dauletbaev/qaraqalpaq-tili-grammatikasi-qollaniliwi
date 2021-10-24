# Ornatıw

1. Dáslep kitapxananı `NPM` arqalı ornatamız
```bash:no-line-numbers
npm install --save qgm
```

2. Proektimizge import qılamız

    1. Tolıq import

<CodeGroup>
  <CodeGroupItem title="Frontend" active>

  ```js
  import qgm from 'qgm';
  ```

  </CodeGroupItem>

  <CodeGroupItem title="Backend (Node.JS)">

  ```js
  const qgm = require('qgm');
  ```

  </CodeGroupItem>
</CodeGroup>

    <p>2. Ya bolmasa kerekli funkciyalardı import etemiz. (Usınıs etiledi.)</p>

<CodeGroup>
  <CodeGroupItem title="Frontend" active>

  ```js
  import { buwingaBol } from 'qgm';
  ```

  </CodeGroupItem>

  <CodeGroupItem title="Backend (Node.JS)">

  ```js
  const { buwingaBol } = require('qgm');
  ```

  </CodeGroupItem>
</CodeGroup>
