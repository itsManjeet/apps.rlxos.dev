export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
            Bazaar
          </h1>

          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Portal app market for rlxos and based Linux distribution
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form>
              <div
                className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                <div className="flex-[1_0_0%]">
                  <label htmlFor="hs-search-article-1"
                         className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search Application</span></label>
                  <input disabled type="email" name="hs-search-article-1" id="hs-search-article-1"
                         className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                         placeholder="Search Application" />
                </div>
                <div className="flex-[0_0_auto]">
                  {/*<a href={"#"}*/}
                  {/*   className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"*/}
                  {/*>*/}
                  {/*  <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                  {/*       viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                  {/*       strokeLinejoin="round">*/}
                  {/*    <circle cx="11" cy="11" r="8" />*/}
                  {/*    <path d="m21 21-4.3-4.3" />*/}
                  {/*  </svg>*/}
                  {/*</a>*/}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}