"use client";

import {Application} from "@/lib/Application";
import {AppCard} from "@/components/AppCard";
import {useEffect, useState} from "react";
import axios from "axios";

export function AppsListView() {
  const apiEndPoint = "/meta.json";
  const [appData, setAppData] = useState<Application[]>([]);

  useEffect(() => {
    axios.request({
      url: apiEndPoint,
      method: "GET",
      withCredentials: false,
    })
      .then(function(response) {
        setAppData(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [appData]);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-6">
        {
          appData.filter(app => app.type === "app").map((app: Application) => (
              <AppCard key={app.id} id={app.id} version={app.version} type={app.type}
                       about={app.about} url={app.url} />
            ),
          )
        }
      </div>
    </div>
  );
}