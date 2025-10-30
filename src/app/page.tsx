// import package.json as json
import json from '../../package.json';

function IndexPage() {
  return (
    <main>
      <h1 className="mb-4">
        Hello there, <span className="animate-bounce inline-block">👋</span>
      </h1>
      <h2>This page is built with:</h2>
      <ul className="list-disc list-outside ml-6">
        <li>
          NextJS: v<span className="italic">{json.dependencies.next}</span>
        </li>
        <li>
          React: v<span className="italic">{json.dependencies.react}</span>
        </li>
        <li>
          Typescript: v
          <span className="italic">{json.devDependencies.typescript}</span>
        </li>
        <li>
          Tailwind: v
          <span className="italic">{json.devDependencies.tailwindcss}</span>
        </li>
        <li>
          ESLint: v<span className="italic">{json.devDependencies.eslint}</span>
        </li>
        <li>
          Prettier: v
          <span className="italic">{json.devDependencies.prettier}</span>
        </li>
      </ul>
    </main>
  );
}

export default IndexPage;
