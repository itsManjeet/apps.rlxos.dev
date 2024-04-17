import {Application} from "@/lib/Application";

export function AppCard(app: Application) {
  const appName = app.id.replaceAll("apps/", "").replaceAll("/", "-");
  return (<div
    className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
      <img src={"/icons/" + appName + ".svg"} alt={appName} loading="lazy" />
    </div>
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
        {appName}
      </h3>
      <p className="mt-3 text-gray-500 dark:text-neutral-500">
        {app.about}
      </p>
    </div>
    <div
      className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
      <a
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href={app.url}>
        Download
      </a>
    </div>
  </div>);
}