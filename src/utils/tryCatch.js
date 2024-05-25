export const tryCatch = (callback) => {
  try {
    return callback()
  } catch {
    alert("Something went wrong!!!")
  }
}
