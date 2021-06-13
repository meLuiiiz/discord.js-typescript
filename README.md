
<h2 style="margin-top:40px;font-weight:300">🎉 Instalando o projeto</h2>

Para a instalação do projeto será necessário fazer um clone do repositório. Para clonar o repositório através de CLI, basta digitar em um terminal:

<br />

```
git clone https://github.com/meLuiiiz/discord.js-typescript.git
```

<br />

Após clonar o repositório, você precisará instalar os pacotes de dependência do projeto:

<br />

```
yarn install
```
<br />

Pronto, está pronto a instalação.

<br />

***Observação:** Vale lembrar que o projeto segue uma padrão de estruturação dos arquivos. Para evitar quaisquer tipo de problemas futuros, leia sobre a estrutura do projeto.*


<h2 style="margin-top:40px;font-weight:300">📁 Estrutura</h2>

O projeto tem uma estruturação de arquivos simples e organizada. O intuito é tornar fácil sua utilização, deixando cada item em sua respectiva área.

Algumas pastas presentes no modelo de estrutura não foram adicionados no repositório. Isso quer dizer que você terá que adicioná-las manualmente ao projeto.

<br />

```
.
├── _@types
│   ├── discord.d.ts
│   └── *.d.ts
├── _config
│   ├── app.ts
│   └── database.ts
├── _database
│   ├── _migrations
│   │   └── [timestamp]-*.ts
│   ├── entity
│   │   └── *.ts
│   └── start.ts
├── _src
│   ├── _Commands
│   │   ├── ping.ts
│   │   └── *.ts
│   ├── _Helper
│   │   ├── delay.ts
│   │   ├── embed.ts
│   │   └── *.ts
│   │
│   └──_Interface
│       ├── Config.ts
│       ├── Database.ts
│       ├── Helper.ts
│       └── *.ts
├── .editorconfig
├── .env
├── .gitignore
├── bot.js
├── ormconfig.json
├── package.json
└── tsconfig.json

```

<h2 style="margin-top:40px;font-weight:300">📃 Tecnologias</h2>

<a href="https://www.typescriptlang.org/" target="_blank">
<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
</a>

<a href="https://nodejs.org/" target="_blank">
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
</a>

<h2 style="margin-top:40px;font-weight:300">🧰 Ferramentas</h2>

<a href="https://code.visualstudio.com/" target="_blank">
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
</a>