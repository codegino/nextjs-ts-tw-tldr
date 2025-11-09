function AboutPage() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/codegino',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/codegino',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/codegino',
    },
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About</h1>

        <div className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          <p className="mb-4">
            This boilerplate was created by{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              Carlo Gino Catapang
            </span>
          </p>
          <p className="mb-6">
            A lean and production-ready starter for building modern web
            applications with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-4">
          <a
            href="https://carlogino.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Visit My Website
          </a>

          <a
            href="mailto:carloginocatapang@gmail.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            carloginocatapang@gmail.com
          </a>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <a
            href="https://github.com/codegino/nextjs-ts-tw-tldr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            ⭐ Star this project on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
