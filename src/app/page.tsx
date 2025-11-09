// import package.json as json
import json from '../../package.json';

function IndexPage() {
  const stack = [
    { name: 'Next.js', version: json.dependencies.next },
    { name: 'React', version: json.dependencies.react },
    { name: 'TypeScript', version: json.devDependencies.typescript },
    { name: 'Tailwind CSS', version: json.devDependencies.tailwindcss },
    { name: 'ESLint', version: json.devDependencies.eslint },
    { name: 'Prettier', version: json.devDependencies.prettier },
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Next.js Tailwind Boilerplate
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          A lean and modern starter template with TypeScript, Tailwind CSS,
          ESLint, and Prettier
        </p>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Ready to use
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                v{item.version}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
