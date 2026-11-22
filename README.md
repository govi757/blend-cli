# blend-cli

`blend-cli` is a spec-driven code generator. You describe your app in small text files (data models, APIs, Mongo collections, screens). The CLI turns them into:

- an **Express + TypeScript** API server, with JWT auth, Swagger docs and Mongoose models
- a **React** web app (Vite + Tailwind + shadcn)
- a **React Native** app (with React Navigation)
- shared, typed **data classes** used by all three

---

## Requirements

- Node.js 20+ and npm
- For React Native modules: a working React Native environment (Xcode and/or Android Studio). See the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment).
- For Mongo modules: a reachable MongoDB instance

## Installation

The CLI is not published to npm yet, so you install it from source:

```bash
git clone <this-repo-url> blend-cli
cd blend-cli
npm install
npm run build      # compiles TypeScript to dist/ and runs `npm link`
```

`npm run build` links the `blend-cli` command globally. Check that it worked:

```bash
blend-cli --help
```

---

## Quick start

### 1. Create a project

```bash
blend-cli init myapp
cd myapp
```

This creates:

```
myapp/
├── myapp.basic              # top-level project spec
├── spec/                    # your module specs go here
└── .basicConfig/
    └── basicConfig.json     # generated config (don't edit by hand)
```

> **Important:** run every other command from inside the project folder. The CLI looks for `<folder-name>.basic` in the current directory.

### 2. Declare sections and modules in `myapp.basic`

A **section** is one product area. Each section lists the modules it contains:

```
section shop {
  data-module Catalog
  mongo-module ShopDb
  express-module Products
  react-module ShopWeb
  rn-module ShopMobile
}
```

| Keyword          | What it generates                          | Spec file it creates                   |
|------------------|--------------------------------------------|----------------------------------------|
| `data-module`    | Typed data classes shared across apps      | `spec/<section>/data/<Name>.data`      |
| `mongo-module`   | Mongoose models in the Express app         | `spec/<section>/mongo/<Name>.mongo`    |
| `express-module` | Services, routes and interfaces for an API | `spec/<section>/api/<Name>.express`    |
| `react-module`   | A Vite React app                           | `spec/<section>/frontend/<Name>.react` |
| `rn-module`      | A React Native app                         | `spec/<section>/frontend/<Name>.rn`    |

You can list several modules of one kind on a line: `data-module Catalog, Orders`.

### 3. Parse the `.basic` file

```bash
blend-cli chop
```

This reads `myapp.basic` and writes the section and module list to `.basicConfig/basicConfig.json`. Run it again whenever you change the `.basic` file.

### 4. Create the module spec files

```bash
blend-cli prepare
```

This creates an empty spec file (just `module <Name>`) for each module under `spec/`. Fill those files in (see [Spec reference](#spec-reference)), then **run `blend-cli prepare` again**. The second run validates the specs and writes the parsed configs (`dataConfig.json`, `apiConfig.json`, `mongoConfig.json`, `reactConfig.json`, `rnConfig.json`) into `.basicConfig/`.

### 5. Generate the code

```bash
blend-cli serve
```

Generated projects are written to `module/`:

```
module/shop/
├── express/shop-api/          # Express API server
├── react/ShopWeb/             # React app (Vite)
├── react-native/ShopMobile/   # React Native app
└── data/                      # shared data classes
```

The first `serve` scaffolds the React and React Native apps and installs their dependencies, so it takes a while. Later runs only regenerate code.

### 6. Run the generated API

```bash
cd module/shop/express/shop-api
npm install
npm start                      # http://localhost:8000, Swagger UI at /api-docs
```

Set environment variables in `.env.dev`:

```
MONGO_DB_URL=mongodb://localhost:27017
JWT_SECRET_KEY=change-me
```

### The day-to-day loop

```bash
# edit myapp.basic     → blend-cli chop
# edit files in spec/  → blend-cli prepare
blend-cli serve
```

**What is safe to edit:** code under `src-gen/` is rewritten on every `serve`. Files outside it (services, components, screens) are only created if they don't already exist, so put your own logic there.

---

## Spec reference

Naming rules used in every spec:
- Module, data, collection, section, component and screen names start with an **uppercase** letter (`Product`).
- Field and API names start with a **lowercase** letter (`price`, `getProduct`).
- Paths are double-quoted strings (`"products/list"`).

### `.data`: data models

```
module Catalog

data Category(id: string, name: string)
data Product(
  id: string,
  title: string,
  price: number,
  inStock: boolean,
  tags: string[],
  discount: number?,
  category: Category
)
```

Types: `string`, `number`, `boolean`, `any`, another data class, `T[]` (array), `T?` (optional).

### `.mongo`: MongoDB collections

```
module ShopDb

collection Product {
  property title: String (index),
  property sku: String (unique),
  property price: Number,
  property tags: String[],
  property releasedAt: Date?,
  reference category: Category
}

collection Category {
  property name: String (unique)
}
```

Types: `String`, `Number`, `Boolean`, `Date`, `Object`, `Mixed`, `any`, plus `[]` and `?`. `reference` creates a link to another collection. Add `(unique)` and/or `(index)` after a field to set those options.

### `.express`: API endpoints

```
module Products

section Product {
  api getProduct(GET) {
    input(id: string)
    output(product: Catalog->Product)
  }

  api listProducts(GET) {
    output(Catalog->Product[])
  }

  api createProduct(POST) {
    authenticated
    input(product: Catalog->Product)
    output(id: string)
  }
}
```

- HTTP methods: `GET`, `POST`, `PUT`, `DELETE`.
- `authenticated` protects the endpoint with the JWT middleware.
- Use `DataModule->DataName` to point at a type from a `.data` file. That data module must be declared in the **same section** of the `.basic` file.
- `output(...)` takes either named fields or one type directly, as in `output(Catalog->Product[])`.

The same API specs are also used to generate the API client code (actions, reducers, sagas) in the React and React Native apps.

### `.react`: React web app

```
module ShopWeb

component ProductCard, PriceTag under "catalog"
screen ProductList, ProductDetail under "catalog"

layout Main("/") {
  page Products("products") view(ProductList)
  page Product("products/:id") view(ProductDetail)

  layout Account("account") {
    page Profile("profile") view(ProductList)
  }
}
```

- `component` / `screen`: names to generate, and the subfolder (`under "..."`) to put them in.
- `layout`: a route group. Layouts can be nested. Each `page` maps a route to a screen with `view(...)`.

### `.rn`: React Native app

Same as `.react`, except each layout also declares a navigator type:

```
module ShopMobile

component ProductCard under "catalog"
screen ProductList, ProductDetail under "catalog"

layout Root("root") type(Stack) {
  page Products("products") view(ProductList)
  page Product("product") view(ProductDetail)
}
```

Layout types: `Stack`, `Drawer`.

---

## Commands

| Command                    | Description                                                              |
|----------------------------|--------------------------------------------------------------------------|
| `blend-cli init <name>`    | Create a new project folder with a starter `.basic` file                 |
| `blend-cli chop`           | Parse the `.basic` file into `.basicConfig/basicConfig.json`             |
| `blend-cli prepare`        | Create missing spec files and validate and parse the existing ones       |
| `blend-cli serve`          | Generate the Express, React, React Native and data code under `module/`  |

---

## Developing blend-cli

```
src/
├── index.ts               # CLI entry (commander)
├── grammar/*.g4           # ANTLR grammars for each spec language
├── parser/                # generated ANTLR parsers (don't edit)
├── helper/                # one helper per generator (Express, Mongo, React, RN, …)
│   └── grammarHelper/     # visitors that turn parse trees into JSON configs
├── types/                 # config/JSON types
└── ai-models/             # bundled TF.js model used for API labelling
template/                  # Express project template
```

If you change a grammar, regenerate its parser, for example:

```bash
npx antlr4ts -o src/parser/blendMongo src/grammar/BlendMongo.g4
```

Then rebuild with `npm run build`.

## License

ISC
