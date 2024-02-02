export default function logError(error: any) {
  if (process.env.NODE_ENV !== "production") console.log(error);
}
