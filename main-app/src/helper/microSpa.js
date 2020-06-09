const {
  SystemJS,
} = window

export const remoteImport = async (url) => (await SystemJS.import(url)).default
