const navigationLinks = [
  {
    name: "",
    link: "#",
  },
];

export function NavigationBar() {
  return (<header
    className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
    <nav
      className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global">
      <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold dark:text-white" href="https://rlxos.dev" aria-label="Brand">rlxos</a>
        <div className="sm:hidden">
          <button type="button"
                  className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                  data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor"
                 viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg className="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16"
                 fill="currentColor"
                 viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation"
           className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div
          className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          {
            navigationLinks.map(nav => (
              <a key={nav.name}
                 className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                 href={nav.link}>{nav.name}</a>
            ))
          }
        </div>
      </div>
    </nav>
  </header>);
}