const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const slugs = [
  // frameworks
  ".net",
  "angular",
  "deno",
  "django",
  "express",
  "nextjs",
  "phoenix",
  "rails",
  "react native",
  "react",
  "remix",
  "stimulus",
  "svelte",
  "electron",
  "tailwind",

  // lang
  "assembly",
  "c#",
  "c++",
  "clojure",
  "elixir",
  "erlang",
  "golang",
  "haskel",
  "java",
  "javascript",
  "julia",
  "ocaml",
  "python",
  "ruby",
  "rust",
  "swift",
  "typescript",

  // db, kv store
  "dynamo",
  "elasticsearch",
  "firestore",
  "mongodb",
  "mysql",
  "postgis",
  "postgres",
  "prisma",
  "psql",
  "redis",
  "sql",
  "sqlite",

  // cloud infra
  "aws",
  "azure",
  "cloudflare",
  "firebase",
  "flyio",
  "google cloud",
  "heroku",
  "kubernetes",
  "terraform",

  // ml
  "fastai",
  "hugging face",
  "keras",
  "machine learning",
  "ml",
  "numpy",
  "pandas",
  "pytorch",
  "tensorflow",
  "transformers",

  // misc
  "blockchain",
  "docker",
  "gql",
  "graphql",
  "web3",
  "hotwire",
  "devops",
  "sre",
];

async function seed() {
  console.log("Adding tag seeds ... ");
  const tags = await prisma.tag.createMany({
    data: slugs.map((slug) => ({ slug })),
    skipDuplicates: true,
  });
  console.log(`Database has been seeded. 🌱`, tags);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
