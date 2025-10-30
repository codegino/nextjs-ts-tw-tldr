// import package.json as json
import json from '../../package.json';

function IndexPage() {
  return (
    <main>
      <h1 className="mb-4">
        Hello there, <span className="animate-bounce inline-block">👋</span>
      </h1>
      <h2>This page is built with:</h2>
      <p>
        NextJS: v<span className="italic">{json.dependencies.next}</span>
      </p>
      <p>
        React: v<span className="italic">{json.dependencies.react}</span>
      </p>
      <p>
        Typescript: v
        <span className="italic">{json.devDependencies.typescript}</span>
      </p>
      <p>
        Tailwind: v
        <span className="italic">{json.devDependencies.tailwindcss}</span>
      </p>
      <p>
        ESLint: v<span className="italic">{json.devDependencies.eslint}</span>
      </p>
      <p>
        Prettier: v
        <span className="italic">{json.devDependencies.prettier}</span>
      </p>
    </main>
  );
}

export default IndexPage;
