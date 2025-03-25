// import package.json as json
import json from '../../package.json';

function IndexPage() {
  return (
    <main>
      <h1 className="mb-4">
        Hello there, <span className="animate-bounce inline-block">👋</span>
      </h1>
      <h2>This page is built with:</h2>
      <p>NextJS: v{json.dependencies.next}</p>
      <p>React: v{json.dependencies.react}</p>
      <p>Typescript: v{json.devDependencies.typescript}</p>
      <p>Tailwind: v{json.devDependencies.tailwindcss}</p>
      <p>ESLint: v{json.devDependencies.eslint}</p>
      <p>Prettier: v{json.devDependencies.prettier}</p>
    </main>
  );
}

export default IndexPage;
