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
  const resp: DataUUID = await fetch(
    "http://localhost:1337/api/task-links?populate=*"
  ).then((res) => res.json());

  const linkId = resp.data.findIndex((val: Link) => val.uuid === uuid);
  if (linkId === -1) {
    return;
  } else {
    return resp.data[linkId];
  }
}
