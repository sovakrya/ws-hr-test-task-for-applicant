const HOST = "http://localhost:1337";

type Task = {
  id: number;
  documentId: string;
  activity: boolean;
  name: string;
  taskText: string;
};

export type Link = {
  uuid: string;
  validity: boolean;
  task: Task;
  documentId: string;
};

export type Settings = {
  title?: string;
  comment?: string;
  videoInstructions?: string;
};

type DataSettings = {
  data: Settings;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type DataUUID = {
  data: Link[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export async function getUuid(uuid: string) {
  const resp: DataUUID = await fetch(`${HOST}/api/task-links?populate=*`).then(
    (res) => res.json()
  );

  const linkId = resp.data.findIndex((val: Link) => val.uuid === uuid);
  if (linkId === -1) {
    return;
  } else {
    return resp.data[linkId];
  }
}

export async function getTaskSettings(): Promise<DataSettings> {
  const resp = await fetch(`${HOST}/api/setting-test-task`);

  return resp.json();
}

export async function updateValidity(link: Link) {
  console.log(link.documentId)
  const resp = await fetch(`${HOST}/api/task-links/${link.documentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        uuid: link.uuid,
        validity: false,
      }
    })

  })

  return resp.json()
}
